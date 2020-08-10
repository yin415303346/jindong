<template>
  <div class="top-icon jindongBox">
    <div class="search-box">
      <div class="search-top">
        <div class="search-top-imgbox" @click="$router.go(-1)">
          <img src="../assets/left.png" alt />
        </div>
        <div class="search-top-inputbox">
          <div class="search-top-inputbox-img">
            <img src="../assets/search.png" alt />
          </div>
          <input type="text" placeholder="鲁花花生油" class="top-title-input" autofocus="autofocus" />
        </div>
        <div class="search-top-text"></div>
      </div>
    </div>
    <div class="concent">



    </div>
    <div class="float">
      <router-link to="/">
        <div class="floatImg">
          <!-- <img src="../assets/homeq.png" v-if="indexItem==0" /> -->
          <img src="../assets/home.png"/>
        </div>
      </router-link>
      <div class="floatImg">
        <!-- <img src="../assets/classfiyq.png" v-if="indexItem==1" /> -->
        <img src="../assets/classfiyq.png"/>
      </div>
      <div class="floatImg">
        <a href="https://wq.jd.com/mcoss/wxmall/home?ptype=2&ptag=138097.1.6&sceneval=2&fromM=1">
          <img src="../assets/jinxi.png" />
        </a>
      </div>
      <router-link to="/shop-car">
        <div class="floatImg">
          <!-- <img src="../assets/shopcarq.png" v-if="indexItem==3" /> -->
          <img src="../assets/shopcar.png"/>
        </div>
      </router-link>
      <router-link to="/enter">
        <div class="floatImg">
          <img src="../assets/enter.png" />
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
 
};
</script>

<style >

</style>