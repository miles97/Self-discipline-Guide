<template>
  <div class="container">
    <div class="header">
      <span @click="setLocalStorage" class="icon">night shift</span>
      <h1>关于组屏显示器相关</h1>
    </div>
    <div class="middle">
      <div class="wrap-left">
        <div class="warp-container" v-for="item in datalist" :key="item.id" @click="showme=!showme">
          <h2>{{item}}</h2>
        </div>
        <h1 class="dd" v-show="showme" >结论</h1>
      </div>
      <!-- 详细描述 -->
      <div class="wrap-right">
        <div class="somethign" v-for="(item) in nameList" :key="item.id" @click="showme2=!showme2">
          <h2>{{item.detail}}</h2>
        </div>
        <div class="consume"  v-show="showme2" >
          <h2>如果你追求最好的连屏体验.选择两块分辨率一样（4K或者2K或者1080P），大小一样的显示器即可(同24寸或者27寸或以上)</h2>
          <h2>如果你想使用旧显示器当作副屏，DIY或者购买无孔支架</h2>
          <h2>如果你想使用旧显示器当作副屏,又不想打孔，闲置出手然后购置一块有VESA孔的显示器</h2>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      datalist: ["分辨率问题", "组屏问题", "缩放问题", "硬件相关"], //数据信息
      nameList: [
        {
          detail: "分辨率拼接的问题,整倍缩放问题,"
        },
        {
          detail: "屏幕需求，拼接，第三方的支架问题,"
        },
        {
          detail: "window缩放倍数"
        },
        {
          detail: "VESA孔，无孔问题，显卡问题"
        }
      ],
      showme:false,
      showme2:false
    };
  },
  computed: mapState({
    stateObject: state => state.stateObject
  }),
  methods: {
    setLocalStorage() {
      // this.triggerItem = !this.triggerItem;
      let obj = {
        triggerItem: !this.stateObject.triggerItem
      };
      // localStorage.setItem("triggerItem", this.trigerItem);
      this.$store.commit("stateFn2", obj);
      console.log(this.stateObject.triggerItem, "!!", obj);
    }
  },
  components: {},
  mounted() {}
};
</script>

<style scoped lang="scss">
.container {
  /* background: #ddd; */
  width: 100%;
  // height: 2000px;
  flex-wrap: wrap;
  display: flex;
  .header {
    width: 100%;
    height: 80px;
  }
  .middle {
    display: flex;
    width: 100%;
    height: 2000px;
    margin-top: 150px;
  }
}
.icon {
  position: fixed;
  top: 20px;
  right: 20px;
}
.wrap-left {
  width: 850px
}
.wrap-right {
  text-align: center;
  width: 850px
}
</style>
