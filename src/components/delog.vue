<template>
  <div>
    <div id="popLayer"></div>
    <div class="delog">
      <!-- 弹窗 -->
      <div class="main_box">
        <header>{{headerTes}}</header>
        <article class="ellipsis">{{tes}}</article>
        <footer class="btn_box">
          <p class="btn" @click="goTo">前往外部链接</p>
          <p class="btn" @click="close">关闭</p>
        </footer>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["headerTes", "tes"],
  methods: {
    close() {
      this.$emit("close");
    },
    goTo() {
      this.$emit("goTo");
    }
  }
};
</script>
<style lang="scss" scoped>
#popLayer {
  background-color: #b3b3b3;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
  -moz-opacity: 0.8;
  opacity: 0.8;
  filter: alpha(opacity=80);
}
.delog {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 300px;
  z-index: 999;
  background-color: #fff;
  padding: 40px;
  article {
    text-align: left;
    margin-top: 20px;
    height: 200px;
    color: blue;
    line-height: 30px;
    -webkit-line-clamp: 7;
  }
  .btn_box {
    position: absolute;
    bottom: 20px;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-around;
    .btn {
      width: 100px;
    }
  }
}
</style>