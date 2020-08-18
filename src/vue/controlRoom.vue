<template>
  <div class="qrcode">
    <div class="container">
      <div class="wrap-name">
        {{datalistname}}
      </div>

      <div class="host-name">
        关于项目使用的布局内容
        <div class="host-detail">这里是简单的对应布局</div>
      </div>
      <span class="host-name">
        
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      datalist: [] ,//数据信息
      datalistname:"", // 储存数据信息的有效字段
    };
  },

  computed: {

  },
  methods: {

  },
  components: {
    
  },
  mounted() {

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
