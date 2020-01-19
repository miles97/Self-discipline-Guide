<template>
  <div id="app" :class="{'nightwatch':stateObject.triggerItem}">
    <router-view />
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "App",
  data() {
    return {
      // triggerItem: false
    };
  },
  watch:{
   '$store.state.stateObject.triggerItem':function(newFlag, oldFlag){
       // done methods
    } 
  },
  computed: mapState({
    'stateObject': state => state.stateObject,
  }),
  mounted() {
    // this.triggerItem = this.stateObject.triggerItem;
    // console.log(this.$store.state.stateObject.triggerItem, "????");
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #fff;
  /* margin-top: 60px; */
}
.prodQRcode {
  position: fixed;
  top: 1rem;
  right: 1rem;
}
.iconnightwatch {
  position: fixed;
  top: 1rem;
  left: 1rem;
}
.nightwatch {
  filter: contrast(91%) brightness(84%) invert(1);
}
.font26{
  font-size: 26px;
}
</style>
