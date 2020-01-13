<template>
  <div class="qrcode">
    <h3>{{value}}</h3>
    <div id="qrcode"></div>
  </div>
</template>

<script>
import QRcode from "qrcodejs2";
export default {
  name: "qrcodesync",
  data() {
    return {
      datalist: [] //数据信息
    };
  },
  props: {
    link: {
      type: String,
      default: "https://github.com/miles97"
    },
    showQRcode: {
      type: Boolean,
      default: false
    },
    value:{
      type:String,
      default:""
    }
  },
  computed: {

  },
  methods: {
    qrcode() {
      let that = this;
      let qrcode = new QRcode("qrcode", {
        width: 124,
        height: 124,
        text: this.link
      });
    }
  },
  components: {
    QRcode
  },
  mounted() {
    this.$nextTick(() => {
    this.qrcode();
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.qrcode {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-bottom: 1rem;
}
</style>
