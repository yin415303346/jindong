<template>
  <div class="panelsbox">
    <!--左边选项列表-->
    <cube-scroll class="leftpanels" >
      <!--ref="scroll" :data="items" :options="options" -->
      <ul class="box1" >
        <li
          v-for="(item,id) in tabslabel"  
          @click="getpanel(item,item.id)"
          :class="item.active?'active':''"
          :key="id"
          
        >{{item.label}}</li>
      </ul>
    </cube-scroll>
    <!--右边商品列表 -->
    
      <cube-scroll class="rightpanels" >
        <ul class="box2">
          <component :is="panellist" :content="content"></component>
          <recommend></recommend>
          <!-- <li v-for="(tag,index) in tags" :key="index">
                        <img :src="tag.image" alt="">
                        <p>{{tag.label}}</p>
          </li>-->
        </ul>
      </cube-scroll>
  </div>
</template>

<script>
import axios from "axios";
import recommend from "../components/recommend.vue";

export default {
  data() {
    return {
      cls: "",
      reclist: [],
      tags: [],
      tabslabel: [],
      panellist: "recommend",
      content: {
        item: "",
        branchlist: "",
        rankicon: "",
        arrowicon: "",
        reclist: [],
      },
      id: "1",
      index: "",
    };
  },

  created() {
    let that = this;
    let url = "http://127.0.0.1:5500/dist/data/panel1.json";
    axios
      .get(url)
      .then(function (response) {
        if (response.status == 200) {
          // console.log(response)
          that.content.branchlist = response.data.branchlist;
          that.content.arrowicon = response.data.arrowicon;
          that.content.title = response.data.title;
          that.content.reclist = response.data.reclist;
          that.content.branchlist2 = response.data.branchlist2;
          that.content.branchlist3 = response.data.branchlist3;
          that.content.branchlist4 = response.data.branchlist4;
          that.content.branchlist5 = response.data.branchlist5;
          that.content.branchlist6 = response.data.branchlist6;
          that.content.branchlist7 = response.data.branchlist7;
          that.content.branchlist8 = response.data.branchlist8;
          that.content.branchlist9 = response.data.branchlist9;
          that.content.branchlist10 = response.data.branchlist10;
        }
      })
      .catch(function (error) {
        console.log(error);
      });

    //获取默认的分类数据
    let url2 = "http://127.0.0.1:5500/dist/data/list.json";
    axios
      .get(url2)
      .then(function (response) {
        that.tabslabel = response.data.tabslabel;
        // console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  },

  methods: {
    //传递商品面数据
    getpanel(item,id) {
      this.cls = id;
      let that = this;
      let url = "http://127.0.0.1:5500/dist/data/panel" + id + ".json";
      axios
        .get(url)
        .then(function (response) {
          if (response.status == 200) {
            // console.log(response)
            that.content.branchlist = response.data.branchlist;
            that.content.arrowicon = response.data.arrowicon;
            that.content.title = response.data.title;
            that.content.reclist = response.data.reclist;
            that.content.branchlist2 = response.data.branchlist2;
            that.content.branchlist3 = response.data.branchlist3;
            that.content.branchlist4 = response.data.branchlist4;
            that.content.branchlist5 = response.data.branchlist5;
            that.content.branchlist6 = response.data.branchlist6;
            that.content.branchlist7 = response.data.branchlist7;
            that.content.branchlist8 = response.data.branchlist8;
            that.content.branchlist9 = response.data.branchlist9;
            that.content.branchlist10 = response.data.branchlist10;
          }
        })
        .catch(function (error) {
          console.log(error);
        });

      //点击左侧分类
      this.tabslabel.forEach((val, ind) => {
        if (id == ind + 1) {
          val.active = true;
        } else {
          val.active = false;
        }
      });

      //点击置顶
      // this.tabslabel.splice(id,1);
      // this.tabslabel.unshift(item);
    },
    test(){
        this.scrollTop = event.target.scrollTop
        console.log(this.scrollTop)

    }
  },

  mounted() {
    //设置滚动盒子的高度
    const leftpanels = document.querySelector(".leftpanels");
    const rightpanels = document.querySelector(".rightpanels");
    const bodyheight = document.documentElement.clientHeight;
    leftpanels.style.height = bodyheight - 1 + "px";
    rightpanels.style.height = bodyheight - 1 + "px";

  },

  components: {
    recommend: recommend,
  },
};
</script>

<style scoped>
.panelsbox {
  display: flex;
  border-bottom: 2px solid rgb(246, 246, 246);
  height: 100%;
}

.leftpanels {
  width: 23%;
  overflow: auto;
}

.rightpanels {
  width: 77%;
  overflow: auto;
}

ul {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  background-color: #fff;
  list-style:none;
}

li {
  height: 46px;
  line-height: 46px;
  width: 86px;
  color: #333;
  background: #f8f8f8;
  font-size: 13px;
  text-align: center;
  border-right: 2px solid rgb(248, 248, 248);
}

.active {
  background: #fff;
  color: #e93b3d;
}

.box2 > li {
  width: 50%;
  justify-content: center;
  align-items: center;
  font-size: 14px;
}

.cube-scroll-wrapper,
.leftpanels,
.rightpanels,
.box1,
.box2 {
  height: 100%;
}

img {
  width: 80px;
  height: 80px;
}

.fade-enter,.fade-leave-active{
        opacity: 0;
}
  
.fade-leave-active,.fade-enter{
        transform: opacity 0.5s;
}
</style>