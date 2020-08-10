<template>
  <div class="jindongBox">
    <div class="top">
      <div class="top-title" v-if="indexItem==0">
        <div class="top-title-box">
          <img src="../assets/muen.png" class="top-title-img" />
        </div>
        <div class="top-title-inputbox">
          <div class="top-inputbox">
            <img src="../assets/jdlogo.png" alt />
          </div>
          <div class="top-imgbox" @click="search">
            <img src="../assets/search.png" alt />
          </div>
          <div @click="search" class="top-title-input-box">
            <input type="text" class="top-title-input" placeholder="欧普照明" />
          </div>
        </div>
          <router-link to="/enter">
            <div class="top-enter">登录</div>
          </router-link>
      </div>
    </div>
    <div class="concent">



    </div>
    <div class="float">
      <div class="floatImg" @click="check(0)">
        <!-- <img src="../assets/homeq.png" v-if="indexItem==0" /> -->
        <img src="../assets/homeq.png"/>
      </div>
      <div class="floatImg" @click="check(1)">
        <!-- <img src="../assets/classfiyq.png" v-if="indexItem==1" /> -->
        <img src="../assets/classfiy.png"/>
      </div>
      <div class="floatImg">
        <a href="https://wq.jd.com/mcoss/wxmall/home?ptype=2&ptag=138097.1.6&sceneval=2&fromM=1">
          <img src="../assets/jinxi.png" />
        </a>
      </div>
      <div class="floatImg" @click="check(3)">
        <!-- <img src="../assets/shopcarq.png" v-if="indexItem==3" /> -->
        <img src="../assets/shopcar.png"/>
      </div>
      <div class="floatImg" @click="check(4)">
        <img src="../assets/enter.png" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      indexItem: 0,
      componentName: "home-page",
    };
  },
  methods: {
    // intoClassify() {
    //   this.indexItem = 1;
    //   this.componentName = "class-ify";
    // },
    // intoMain() {
    //   this.indexItem = 0;
    //   this.componentName = "home-page";
    // },
    search() {
      this.$router.push({
        path: "search",
      });
    },
    check(index) {
      
      if (index == 1) {
       
         this.$router.push({
          path: "classify",
        });
      }
      if (index == 3) {
       
        this.$router.push({
          path: "shop-car",
        });
      }
      if (index == 4) {
        this.$router.push({
          path: "enter",
        });
      }
    },
  }
};
</script>
<style>
* {
  padding: 0;
  margin: 0;
}
body,html{
  width: 100%;
  height: 100%;
}
.top{
  width: 100%;
}
.jindongBox {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
}
.float {
  background: #fff;
  /* padding: 2px 15px; */
  flex-shrink: 0;
  display: flex;
  justify-content: space-between;
  text-align: center;
  box-shadow: 0 0 10px 0 hsla(0, 6%, 58%, 0.6);
}
.floatImg img {
  width: 60px;
}
.top-title {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 2px 12px;
  background: url("../assets/back.jpg");
  height: 40px;
  align-items: center;
  color: #fff;
  font-size: 14px;
  /* width: 100%; */
}
.top-title-box {
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
}
.top-title-img {
  width: 100%;
}

.top-title-inputbox {
  border-radius: 15px;
  width: 100%;
  height: 30px;
  background: #f7f7f7;
  padding-right: 30px;
  box-sizing: border-box;
  color: #666;
  flex-grow: 1;
  margin: 0 10px;
  display: flex;
  align-items: center;
}
.top-inputbox {
  width: 20px;
  height: 20px;
  margin: 0 5px 0 15px;
  position: relative;
}
.top-inputbox::after {
  content: "";
  border-right: 1px solid #ddd;
  position: absolute;
  top: 2px;
  left: 27px;
  height: 16px;
}
.top-inputbox img {
  width: 100%;
}
.top-imgbox {
  width: 17px;
  height: 17px;
  margin: 0 12px;
}
.top-imgbox img {
  width: 100%;
  vertical-align: top;
}
.top-title-input {
  border: none;
  font-size: 12px;
  line-height: 30px;
  background: #f7f7f7;
  color: #232326;
  box-sizing: border-box;
  white-space: nowrap;
  vertical-align: middle;
  text-overflow: ellipsis;
  outline: none;
  width: 100%;
  margin-right: 20px;
}
.top-enter {
  width: 40px;
  font-size: 14px;
  white-space: nowrap;
  color: #fff;
  text-align: center;
  line-height: 20px;
}

/* 分类页顶部 */

.search-box {
  padding: 7px;
  background: #fff;
}
.search-top {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.search-top-inputbox {
  display: flex;
  flex-direction: row;
}
.search-top-imgbox {
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
}
.search-top-imgbox img {
  width: 120%;
}
.search-top-inputbox {
  flex-grow: 1;
  height: 30px;
  width: 100%;
  margin: 0 10px;
  background: rgb(246, 246, 246);
  border-radius: 15px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
}
.search-top-inputbox-img {
  width: 20px;
  height: 20px;
  margin: 0 15px;
}
.search-top-inputbox-img img {
  width: 100%;
}
.search-top-text {
  width: 30px;
  height: 28px;
}
.search-concent {
  padding: 15px;
  background: #fff;
  margin-top: 2px;
}
.hot-search {
  font-size: 15px;
  margin-bottom: 5px;
}
.hot-search-concent-box-color {
  color: #e93b3d;
}
.hot-search-concent-box-colored {
  color: #686868;
}
.hot-search-concent-box a {
  text-decoration: none;
  margin-right: 10px;
  background: rgb(246, 246, 246);
  font-size: 12px;
  padding: 4px 12px;
  line-height: 35px; 
  white-space: nowrap;
  text-overflow: ellipsis;
  border-radius: 4px;
}
</style>