<template>
  <div class="main-wrap">
    <el-button
      type="primary"
      icon="el-icon-search"
      @click="showQRcode=true"
      class="prodQRcode"
    >生成二维码</el-button>
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
        <div
          class="weight-date"
          style="font-size:22px;margin:10px 0;text-align:left;margin: 20px 40px;"
        >今日质量</div>
        <el-input v-model="form.weight" @keyup.enter.native="confirmInput" v-if="showInputlabel"></el-input>
        <span v-if="!showInputlabel" @click="showInputlabel=!showInputlabel">{{form.weight}}公斤</span>
        <div class="short-timeline" style="text-align:left;margin: 20px 40px;">
          <span style="font-size:22px;margin:10px 0;">今日代办简要</span>
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
              >√</span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import qrcode from "@/components/qrcode";

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
      todolist: ["骂陆鸡鸡", "骂老戴", "学习", "努力"],//默认的当天待办事项
      
    };
  },
  watch: {
    // chooseDate(val, oldval) {
    // this.chooseDate = val;
    // }
  },
  components: {
    // Toast
    qrcode
  },
  methods: {
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
  margin: 2rem 5rem;
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
</style>
