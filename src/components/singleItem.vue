<template>
  <div class="singleItem">
    <!-- 单一项目进行看板 -->
    <div class="wrap-icon-processine">
      <div class="el-icon-s-opportunity fade-duraing"></div>
      <div class="el-icon-s-check fade-duraing2"></div>
      <div class="el-icon-close-notification fade-duraing3"></div>
      <div class="el-icon-data-analysis fade-duraing4"></div>
      <!-- <transition name="el-zoom-in-center">
        <div v-show="show2" class="transition-box">
          <i class="el-icon-s-check"></i>
          <i class="el-icon-close-notification"></i>
          <i class="el-icon-data-analysis"></i>
        </div>
      </transition>-->
    </div>
    <el-button
      type="primary"
      icon="el-icon-timer"
      @click="resetTimer"
      class="prodQRcode"
    >重制时间</el-button>
    <div class="tomato">
      <div class="title">
        <span class="font26">
          <i class="el-icon-time"></i>
          剩余时间
        </span>
      </div>

      <el-progress type="circle" :percentage="tomatoremain"></el-progress>
    </div>

    <el-progress :text-inside="true" :stroke-width="50" :percentage="centData" ></el-progress>
    <el-progress :text-inside="true" :stroke-width="50" :percentage="tomatoremain" ></el-progress>

  </div>
</template>

<script>
export default {
  name: "singleItem",
  data() {
    return {
      datalist: [], //数据信息
      centData: 0, //计算后的senddata
      show2: true,
      tomatoremain:0,//一个番茄时钟的 40分钟的剩余时间
      endTime:0,
    };
  },
  props: {
    //传递开始参数以及结束参数，使用简单的番茄时钟或者定时任务进行进行项目
    value: {
      type: String,
      default: ""
    }
  },
  computed: {
    // tomatoremain(){
    //   if(this.endTime - new Date().getTime()>0){
    //     return (this.endTime - new Date().getTime())/1000/60/40
    //   }else{
    //     return 0
    //   } 
    // }
  },
  methods: {
    setCent() {
      setTimeout(() => {
        this.centData = new Date().getUTCSeconds();
        this.setCent();
      if(this.endTime - new Date().getTime()>0){
        let mathVal = Number(1000*60*40/(this.endTime - new Date().getTime())).toFixed(3);
        this.tomatoremain = Number(mathVal)
      }else{
        this.tomatoremain =  0
      } 
      }, 1000);
    },
    //重置番茄时钟
    resetTimer(){
      this.tomatoremain = 0;
      let nowTime = new Date().getTime()
      localStorage.setItem('tomatotime',nowTime);//缓存番茄时钟开始的时间
      this.endTime = nowTime + 40*60*1000;

    }
  },
  components: {},
  mounted() {
    //   this.centData = new Date().getUTCSeconds();
    this.setCent();
    if(!!localStorage.getItem('tomatotime')){
      this.endTime = Number(localStorage.getItem('tomatotime'))+ 40*60*1000;
    }else{
      this.resetTimer();
    }
  }
};
</script>

<style scoped>
.wrap-icon-processine {
  font-size: 10rem;
  /* font-size: 20px; */
  transition: all 4s;
}
.fade-duraing {
  animation-duration: 5s;
  animation-name: fadeRoute;
  animation-fill-mode: both;
  position: relative;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}
@keyframes fadeRoute {
  0% {
    opacity: 0;
    left: 150px;
    top: 0px;
  }
  25% {
    opacity: 1;
    left: 0px;
    top: 0px;
    color: #7eb;
  }
  50% {
    opacity: 0;
    left: 150px;
    top: 0px;
  }
  100% {
    opacity: 0;
    left: 150px;
    top: 0px;
  }
}
.fade-duraing2 {
  animation-duration: 5s;
  animation-name: fadeRoute2;
  animation-fill-mode: both;
  position: relative;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}
@keyframes fadeRoute2 {
  0% {
    opacity: 0;
    left: 0px;
    top: 0px;
  }
  50% {
    opacity: 0;
    left: 0px;
    top: 0px;
  }
  51% {
    opacity: 0;
    left: 0px;
    top: 0px;
  }
  75% {
    opacity: 1;
    left: 150px;
    top: 0px;
    color: #73b;
  }
  100% {
    opacity: 0;
    left: 0px;
    top: 0px;
  }
}
.fade-duraing3 {
  animation-duration: 5s;
  animation-name: fadeRoute3;
  animation-fill-mode: both;
  position: relative;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}
@keyframes fadeRoute3 {
  0% {
    opacity: 0;
    left: 150px;
    top: 0px;
  }
  25% {
    opacity: 1;
    left: 0px;
    top: 0px;
    color: #78b;
  }
  50% {
    opacity: 0;
    left: 150px;
    top: 0px;
  }
  100% {
    opacity: 0;
    left: 150px;
    top: 0px;
  }
}
.fade-duraing4 {
  animation-duration: 5s;
  animation-name: fadeRoute4;
  animation-fill-mode: both;
  position: relative;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}
@keyframes fadeRoute4 {
  0% {
    opacity: 0;
    left: 0px;
    top: 0px;
  }
  50% {
    opacity: 0;
    left: 0px;
    top: 0px;
  }
  51% {
    opacity: 0;
    left: 0px;
    top: 0px;
  }
  75% {
    opacity: 1;
    left: 150px;
    top: 0px;
    color: #9e2;
  }
  100% {
    opacity: 0;
    left: 0px;
    top: 0px;
  }
}
</style>
