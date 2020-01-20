<template >
  <div class="main-wrap">
    <el-button
      type="primary"
      icon="el-icon-search"
      @click="showQRcode=true"
      class="prodQRcode"
    >生成二维码</el-button>
    <el-button icon="el-icon-magic-stick" @click="setLocalStorage" class="iconnightwatch">切换夜间模式</el-button>
    <div class="hello" @click="tourl('/timeline')">本月行程一览</div>
    <el-divider></el-divider>
    <div class="flex-wrap">
      <el-calendar style="max-width:500px;">
        <template slot="dateCell" slot-scope="{date, data}">
          <p
            :class="data.isSelected ? 'is-selected' : ''"
            @click="addItem(data)"
          >{{ data.day.split('-').slice(2).join("") }} {{ data.isSelected ? '✔️' : ''}}{{datalist[data.day]||null}}</p>
        </template>
      </el-calendar>
      <el-dialog :visible.sync="showQRcode" width="30%" center>
        <qrcode :link="host + $route.path" :showQRcode="showQRcode" value="二维码生成"></qrcode>
      </el-dialog>
      <!-- 本日日志   -->
      <div class="datelog">
        <div class="head-date">{{chooseDate}}</div>
        <div class="weight-date">今日质量</div>
        <el-input v-model="form.weight" @keyup.enter.native="confirmInput" v-if="showInputlabel"></el-input>
        <span v-if="!showInputlabel" @click="showInputlabel=!showInputlabel">{{form.weight}}公斤</span>
        <div class="short-timeline" style="text-align:left;margin: 20px 40px;">
          <!-- 跳转到番茄时钟代办 -->
          <span style="font-size:22px;margin:10px 0;" @click="tourl('/singleItem')">今日代办简要</span>
          <div class="list-line" v-for="(item,index) in todolist" :key="item.id">
            <h3
              class="main-subject"
              @click="pushIndex(index)"
              :class="{'doneline':doneItem[index]}"
            >
              {{index+1}}:{{item}}
              <span
                v-if="!doneItem[index]"
                style="color: #7FC;font-size: 26px;"
              >✔️</span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import qrcode from "@/components/qrcode";
import { mapState } from "vuex";
export default {
  name: "home",
  data() {
    return {
      value: new Date(),
      datalist: {}, //每天的待办事项，直接通过一个对象放置。使得数据格式直观易懂
      host: "miles97.github.io",
      showQRcode: false,
      chooseDate: "", //保存选中的日期
      form: {
        weight: 60 //默认60公斤
      },
      showInputlabel: true, //
      doneItem: [false, false, false, false], //完成某项
      todolist: ["记录数据", "安排项目进度", "学习", "努力"] //默认的当天待办事项
      // triggerItem: false //切换夜间模式
      // 通过数组形式的操作实现内容的切换以及图表的算法展示
      // 通过不同程度的合计算法，展示财务的健康状况等等
      // 通过饼图展示每月度的合计账单展示健康状况
      // 通过大部分的柱状图展示生活向消费等等的各个日期的变化，月份以及季度改变
      // 通过折线图展示每个月的实际消费情况，个人有数
      // dashborad展示item
      // 通过比率阈值判定对应支出或者单项存在的风险等。
      // 未来可以通过开发能力进行数据的自动收集和录入
      // Node.js + mongodb + vue.js + elementui + vue-eharts + webpack
      /*
        monggodb直接存储服务器，通过简单的数据交互完成需求
        在服务器上部署node.js以及完整服务
      */
    };
  },
  watch: {
    // chooseDate(val, oldval) {
    // this.chooseDate = val;
    // }
  },
  computed: mapState({
    stateObject: state => state.stateObject
  }),
  components: {
    // Toast
    qrcode
  },
  methods: {
    setLocalStorage() {
      // this.triggerItem = !this.triggerItem;
      let obj = {
        triggerItem: !this.stateObject.triggerItem
      };
      // localStorage.setItem("triggerItem", this.trigerItem);
      this.$store.commit("stateFn2", obj);
      console.log(this.stateObject.triggerItem, "!!", obj);
    },
    pushIndex(idx) {
      this.doneItem[idx] = !this.doneItem[idx];
      this.$set(this.doneItem, idx, this.doneItem[idx]);
      console.log(this.doneItem);
    },
    addItem(data) {
      console.log(data);
      Object.assign(this.datalist, { [data.day]: "XX行程" });
      this.chooseDate = data.day; //date
      // console.log(this.datalist, this.datalist[data.day], data.day);
    },
    tourl(url) {
      this.$router.push(url);
    },
    //确认输入的东西
    confirmInput() {
      this.showInputlabel = false;
    }
  },
  created() {
    // Toast('??')
  }
};
</script>

<style scoped>
.main-wrap {
  padding: 5rem;
}
.is-selected {
  color: #1989fa;
}
.hello {
  max-width: 300px;
  text-align: left;
  font-size: 20px;
}
.flex-wrap {
  display: flex;
}
.datelog {
  width: 500px;
}
.head-date {
  font-size: 20px;
}
.doneline {
  text-decoration: line-through;
}
.nodone {
  color: #fef;
}
.nightwatch {
  filter: contrast(91%) brightness(84%) invert(1);
}
.weight-date {
  font-size: 22px;
  margin: 10px 0;
  text-align: left;
  margin: 20px 40px;
}
</style>
