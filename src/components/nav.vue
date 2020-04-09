<template>
  <div>
    <div class="nav_box">
      <!-- 左侧菜单栏 -->
      <header class="header">
        <div class="user_info">
          <h3>xiaxinhuan</h3>
          <p>Technology&Block</p>
        </div>
        <ul class="nav_title">
          <li v-for="(item,index) in tabTitleList" :key="index" @click="goNew(item)">{{item.title}}</li>
        </ul>
        <div class="some_link">
          <h3>友情链接</h3>
          <ul>
            <li
              v-for="(item,index) in linkList"
              :key="index"
              @click="toNew(item)"
            >{{item.headerTes}}</li>
          </ul>
        </div>
      </header>
    </div>
    <delogComponent
      @goTo="goTo()"
      @close="close"
      :headerTes="headerTes"
      :tes="tes"
      v-show="this.delogBoole"
    ></delogComponent>
  </div>
</template>
<script>
import delogComponent from "./delog.vue";
export default {
  components: {
    delogComponent
  },
  data() {
    return {
      delogBoole: false,
      headerTes: "",
      tes: "",
      goUrl: "",
      tabTitleList: [
        { title: "首页", url: "/home" },
        { title: "归档", url: "/css" },
        { title: "关于", url: "/js" },
        { title: "面试", url: "/vue" },
        { title: "复习", url: "/Rcomponent01" },
        { title: "more", url: "/ts" }
      ],
      linkList: [
        {
          headerTes: "js中的宏任务与微任务",
          linkUrl: "https://juejin.im/post/5de752c5518825126a6c45ec",
          tes:
            "宏任务：包括整体代码script，setTimeout，setInterval。微任务：Promise，process.nextTick。注：Promise立即执行，then函数分发到微任务Event Queue，process.nextTick分发到微任务Event Queue"
        },
        {
          headerTes: "前端算法收集库",
          linkUrl: "https://juejin.im/post/5aa4cd1051882577b45ea2c3",
          tes:
            "二分法查找，也称折半查找，是一种在有序数组中查找特定元素的搜索算法。查找过程可以分为以下步骤：（1）首先，从有序数组的中间的元素开始搜索，如果该元素正好是目标元素（即要查找的元素），则搜索过程结束，否则进行下一步。（2）如果目标元素大于或者小于中间元素，则在数组大于或小于中间元素的那一半区域查找，然后重复第一步的操作。（3）如果某一步数组为空，则表示找不到目标元素。"
        }
      ]
    };
  },
  methods: {
    goNew(item) {
      this.$router.push({ path: item.url });
    },
    toNew(item) {
      this.headerTes = item.headerTes;
      this.tes = item.tes;
      this.goUrl = item.linkUrl;
      this.delogBoole = true;
    },
    close() {
      this.delogBoole = false;
    },
    goTo(item) {
      window.location.href = this.goUrl;
    }
  }
};
</script>
<style lang="scss" scoped>
.nav_box {
  width: 200px;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 250px;
  .header {
    .user_info {
      padding: 30px 0 10px 0;
      text-align: center;
      background-color: #000;
      h3,
      p {
        height: 36px;
      }
      h3 {
        color: #fff;
        font-size: 20px;
      }
      p {
        color: #ddd;
      }
    }
    .nav_title {
      padding: 20px 0;
      background-color: #fff;
      li {
        // font-size: 18px;
        height: 30px;
        padding: 5px 20px;
        text-align: left;
        line-height: 30px;
        a {
          color: #000;
          padding: 5px 20px;
        }
      }
      li:hover {
        background-color: #f9f9f9;
        cursor: pointer;
      }
    }
    .some_link {
      margin-top: 10px;
      padding: 20px 0;
      background-color: #fff;
      text-align: left;
      li,
      h3 {
        margin: 8px 20px;
      }
      h3 {
        border-bottom: 1px dashed #ddd;
        padding-bottom: 10px;
      }
      li:hover {
        background-color: #f9f9f9;
        cursor: pointer;
      }
    }
  }
}
</style>