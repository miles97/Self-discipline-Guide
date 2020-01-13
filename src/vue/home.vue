<template>
  <div class="main-wrap">
    <el-button
      type="primary"
      icon="el-icon-search"
      @click="showQRcode=true"
      class="prodQRcode"
    >生成二维码</el-button>
    <div class="hello" @click="tourl('/timeline')">本月行程一览</div>
    <el-calendar>
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
      showQRcode: false
    };
  },
  components: {
    // Toast
    qrcode
  },
  methods: {
    addItem(data) {
      Object.assign(this.datalist, { [data.day]: "XX行程" });
      console.log(this.datalist, this.datalist[data.day], data.day);
    },
    tourl(url) {
      this.$router.push(url);
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
</style>
