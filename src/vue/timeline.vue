<template>
  <div class="main-wrap">
    <div class="wrap-top">
      <el-progress :percentage="30.123" :stroke-width="25" :text-inside="true"></el-progress>
      <el-progress :percentage="showcent" status="warning" :text-inside="true" :stroke-width="25"></el-progress>
    </div>

    <div class="today">
      <el-timeline>
        <el-timeline-item
          timestamp="2018/4/12"
          placement="top"
          v-for="i in [1,2,3,4,5,6,7]"
          :key="i"
        >
          <el-card>
            <h4>更新 Github 模板</h4>
            <p>王小虎 提交于 {{new Date()}}</p>
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </div>
    <el-button
      type="primary"
      icon="el-icon-search"
      @click="showQRcode=true"
      class="prodQRcode"
    >生成二维码</el-button>
    <el-dialog :visible.sync="showQRcode" width="30%" center>
      <qrcode :link="host + $route.path" :showQRcode="showQRcode" value="二维码生成"></qrcode>
    </el-dialog>
  </div>
</template>

<script>
import qrcode from "@/components/qrcode";

export default {
  name: "timeline",
  data() {
    return {
      value: new Date(),
      defalutDate: [{}],
      host: "https://miles97.github.io",
      showQRcode: false,
      showcent: 0
    };
  },
  computed: {},
  watch: {
    // showcent(val, oldval) {
    //   if (val == oldval) {
    //     this.showcent = new Date().getUTCSeconds();
    //   }
    //   setTimeout(() => {
    //     this.showcent = new Date().getUTCSeconds();
    //   }, 1000);
    // }
  },
  components: {
    qrcode
  },
  methods: {
    setCent() {
      setTimeout(() => {
        this.showcent = new Date().getUTCSeconds();
        this.setCent();
      }, 1000);
      
    }
  },
  created() {
    // Toast('??')
    this.setCent();
    console.log(this.$route);
  }
};
</script>

<style scoped >
.main-wrap {
  margin: 2rem 5rem;
}
.today {
  width: 340px;
}
.is-selected {
  color: #1989fa;
}
</style>
