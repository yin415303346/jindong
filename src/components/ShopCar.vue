<template>
  <div class="pagecart">
    <div class="shop-back">
      <div @click="goback">
        <img src="../assets/左标.png" />
      </div>
      <div class="shop-back-div">购物车</div>
      <div @click="blackclick">
        <img src="../assets/更多.png" />
      </div>
    </div>
    <div class="good-black-nav" :class="{activeBlack:blacknav==true}">
      <router-link to="/" style="color:white">
        <div class="good-black-nav-detail">
          <span class="good-black-nav-detail-span1">
            <img src="../assets/房屋管理.png" alt />
          </span>
          <span class="good-black-nav-detail-span2">首页</span>
        </div>
      </router-link>
      <router-link to="/classify" style="color:white">
        <div class="good-black-nav-detail">
          <span class="good-black-nav-detail-span1">
            <img src="../assets/搜索.png" alt />
          </span>
          <span class="good-black-nav-detail-span2">分类搜索</span>
        </div>
      </router-link>
      <router-link to="/mine" style="color:white">
        <div class="good-black-nav-detail">
          <span class="good-black-nav-detail-span1">
            <img src="../assets/我.png" alt />
          </span>
          <span class="good-black-nav-detail-span2">我的京东</span>
        </div>
      </router-link>
      <router-link to="/" style="color:white">
        <div class="good-black-nav-detail">
          <span class="good-black-nav-detail-span1">
            <img src="../assets/足迹.png" alt />
          </span>
          <span class="good-black-nav-detail-span2">浏览记录</span>
        </div>
      </router-link>
      <router-link to="/" style="color:white">
        <div class="good-black-nav-detail">
          <span class="good-black-nav-detail-span1">
            <img src="../assets/心 爱心.png" alt />
          </span>
          <span class="good-black-nav-detail-span2">我的关注</span>
        </div>
      </router-link>
      <router-link to="/" style="color:white">
        <div class="good-black-nav-detail">
          <span class="good-black-nav-detail-span1">
            <img src="../assets/分享.png" alt />
          </span>
          <span class="good-black-nav-detail-span3">分享</span>
        </div>
      </router-link>
      <div class="good-black-nav-css"></div>
    </div>
    <router-link to='/enter'>
    <div class="carttop" :class="{carttop1:carttop==true}" @click="gocart()">
      <div class="topbar">{{topcontent}}</div>
      <button class="btntop">{{register}}</button>
    </div>
    </router-link>
    <div class="empty_cart">
      <div class="shopcart_empty_wrap" v-for="item in middlecontent" :key="item.active">
        <div class="cart_empty">
          <img :src="item.img" />
        </div>
        <div class="cart_info">
          <span class="time">{{item.info}}</span>
        </div>
      </div>
      <div>
        <div class="shopcart_mod_title">
          <span class="shopcart_mod_title_text">{{middletext}}</span>
        </div>
      </div>

      <div class="mall_seckill" v-for="item in flashsale" :key="item.aqua">
        <div class="mall_seckill_head">
          <div class="mall_seckill_title">{{item.flashtitle}}</div>
          <!-- 倒计时 -->
          <div class="mall_seckill_countdown">
            <span class="time">{{item.flashtime}}</span>
            <div class="countdown_detail">{{item.countdown}}</div>
          </div>
          <div class="mall_seckill_link">
            <img :src="item.flashimg" />
          </div>
        </div>
        <!-- 滑动图片 -->
        <div class="mall_seckill_slider" v-for="item in products" :key="item.aspectj">
          <div class="mall_seckill_item">
            <div class="mall_seckill_image">
              <img :src="item.img" class="image" />
              <p class="mall_seckill_price">{{item.newprice}}</p>
            </div>
            <div class="nprice"></div>
            <div class="oprice"></div>
          </div>
        </div>
        <div class="empty_cart_coupon">
          <div class="mod_coupon_head">
            <div class="mod_coupon_title">
              <img :src="imgleft" />
              <span>{{benefits}}</span>
              <img :src="imgright" />
            </div>
            <div class="mod_coupon_get">
              <span>{{btntext}}</span>
            </div>
          </div>

          <div class="mod_coupon_area">
            <img :src="coupon" />
          </div>
        </div>
      </div>
    </div>
    <div>
      <div id="cnxhTitle " class="recomm_mod_title">
        <span class="recomm_mod_title_text">{{bottomtext}}</span>
      </div>
      <div class="mod_recommend_v2">
        <ul class="list" v-for="item in goods" :key="item.id">
          <li class="ad_li">
            <div class="cover">
              <img :src="item.goodsimg" />
            </div>
            <div class="info">
              <div class="rec_name">
                <i class="mod_tag">
                  <img :src="item.jdimg" />
                </i>
                <span>{{item.desc}}</span>
              </div>
              <div class="flex_wrap">
                <div class="flex_wrap">
                  <div class="price_info">
                    <div class="price">
                      <span class>{{item.price}}</span>
                      <em>{{item.pricenum}}</em>
                    </div>
                  </div>
                </div>
                <div class="buy rec_cart">
                  <img :src="item.cartimg" />
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      topcontent: "",
      register: "",
      item: "",
      desc: "",
      middlecontent: [],
      middletext: "",
      flashtitle: "",
      flashsale: [],
      flashtime: "",
      countdown: "",
      flashimg: "",
      imgleft: "",
      goods: [],
      bottomtext: "",
      newprice: "",
      blacknav: false,
      carttop:false
    };
  },
  methods: {
    goback() {
      this.$router.go(-1);
    },
    gocart(){
        this.carttop=true
    },
    blackclick() {
      if (this.blacknav == false) {
        this.blacknav = true;
      } else if (this.blacknav == true) {
        this.blacknav = false;
      }
    },
  },
    mounted(){
    let that = this;
    window.onscroll = function (){
        that.blacknav=false
    } 
    },
  created() {
    let that = this;
    let url = "http://127.0.0.1:5500/src/data/cart.json";
    axios
      .get(url)
      .then(function (response) {
        if (response.status == 200) {
          console.log(response);

          that.topcontent = response.data.topcontent;
          that.register = response.data.register;
          that.middlecontent = response.data.middlecontent;
          that.middletext = response.data.middletext;
          that.flashtitle = response.data.flashtitle;
          that.flashsale = response.data.flashsale;
          that.flashtime = response.data.flashtime;
          that.countdown = response.data.countdown;
          that.flashimg = response.data.flashimg;
          that.imgleft = response.data.imgleft;
          that.benefits = response.data.benefits;
          that.imgright = response.data.imgright;
          that.btntext = response.data.btntext;
          that.coupon = response.data.coupon;
          that.bottomtext = response.data.bottomtext;
          that.goods = response.data.goods;
          that.desc = response.data.desc;
          that.products = response.data.products;
          that.item.newprice = response.data.item.newprice;
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  },
};
</script>

<style scoped>


.good-black-nav-detail {
  display: flex;
  align-items: center;
}
.good-black-nav-detail-span1 {
  width: 20%;
}
.good-black-nav-detail-span1 img {
  padding: 0.1rem;
  width: 100%;
  margin-left: 0.5rem;
}
.good-black-nav-detail-span2 {
  display: flex;
  flex-grow: 1;
  padding: 0.5rem;
  border-bottom: 1px solid #999;
  margin-left: 0.5rem;
}
.good-black-nav-detail-span3 {
  display: flex;
  flex-grow: 1;
  padding: 0.5rem;
  margin-left: 0.5rem;
}
.good-black-nav {
  width: 8rem;
  background-color: black;
  color: white;
  position: fixed;
  right: 0.5rem;
  top: 3.5rem;
  z-index: 9;
  display: flex;
  flex-flow: column;
  border-radius: 5px;
  display: none;
}
.good-black-nav-css {
  border: 10px solid transparent;
  position: fixed;
  right: 0.8rem;
  top: 2.5rem;
  z-index: 99;
  border-bottom-color: black;
}
.pagecart {
  width: 100%;
  height: 100%;
  /* overflow-y: scroll;
    overflow: hidden scroll; */
  background-color: rgb(242, 242, 242);
}
.shop-back {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
  background-color: white;
}
.shop-back img {
  width: 2rem;
}
.activeBlack {
  display: block;
}
.carttop {
  border-top: 1px solid rgb(242, 242, 242);
  text-align: center;
  height: 60px;
  line-height: 60px;
  font-size: 14px;
  color: #333;
  background-color: #fff;
  border-radius: 0 0 10px 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.btntop {
  display: inline-block;
  margin-left: 10px;
  width: 53px;
  height: 28px;
  line-height: 28px;
  text-align: center;
  color: #fff;
  background-image: linear-gradient(270deg, #f2270c, #ff4b2b);
  box-shadow: 0 3px 6px 0 rgba(255, 65, 66, 0.2);
  border-radius: 15px;
  border: none;
}

.shopcart_empty_wrap {
  padding: 70px 0 65px;
  text-align: center;
}

.cart_info {
  font-size: 15px;
  color: #333;
  line-height: 16px;
  margin-top: 15px;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}

.shopcart_mod_title {
  position: relative;
  margin: 15px 0;
  height: 1em;
  line-height: 1em;
  text-align: center;
  font-size: 12px;
  color: #999;
}

.shopcart_mod_title:after {
  content: "";
  position: absolute;
  z-index: 1;
  pointer-events: none;
  background-color: #ccc;
  height: 1px;
  left: 0;
  right: 0;
  top: 0;
  left: 10px;
  right: 10px;
  top: 50%;
}
.shopcart_mod_title .shopcart_mod_title_text {
  z-index: 2;
  position: relative;
  padding: 0 15px;
  background-color: rgb(242, 242, 242);
}

.shopcart_mod_title .shopcart_mod_title_text:after {
  right: 0;
}

.shopcart_mod_title .shopcart_mod_title_text:after,
.shopcart_mod_title .shopcart_mod_title_text:before {
  content: "";
  position: absolute;
  top: 50%;
  margin-top: -2px;
  width: 4px;
  height: 4px;
  background-color: #ccc;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
}

.shopcart_mod_title .shopcart_mod_title_text:after,
.shopcart_mod_title .shopcart_mod_title_text:before {
  content: "";
  position: absolute;
  top: 55%;
  margin-top: -2px;
  width: 4px;
  height: 4px;
  background-color: #ccc;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
}

.shopcart_mod_title .shopcart_mod_title_text:before {
  left: 0;
}

.mall_seckill_head {
  display: flex;
  flex-direction: row;
  height: 45px;
  line-height: 45px;
}

.mall_seckill {
  background-color: #fff;
  border-radius: 4px 0 0 4px;
  margin: 0 0 15px 15px;
}

.mall_seckill_title {
  font-size: 16px;
  color: #333;
  margin: 0 10px 0 15px;
  font-weight: 700;
}

.mall_seckill_countdown .time {
  display: flex;
  color: #999;
  font-size: 12px;
}

.mall_seckill_countdown {
  display: flex;
}
.carttop1{
    display: none;
}

.countdown_detail {
  display: flex;
  align-items: center;
  font-size: 12px;
  margin-left: 12px;
  margin-right: 114px;
}

.mall_seckill_link img {
  content: "";
  display: inline-block;
  vertical-align: middle;
  width: 16px;
  height: 16px;
  margin-top: -6px;
  margin-right: 10px;
}

.mall_seckill_image {
  position: relative;
  height: 0;
  overflow: hidden;
  padding-top: 100%;
}

.mall_seckill_image .image {
  width: 100%;
  height: auto;
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 4px;
}

.mall_seckill_slider .mall_seckill_item {
  display: inline-block;
  vertical-align: top;
}

.mall_seckill_item {
  position: relative;
  text-align: center;
  width: 24%;
  margin-right: 10px;
  padding: 0 5px 5px;
  border-radius: 4px;
}

.empty_cart_coupon {
  padding: 15px 10px;
  background: #fff;
}

.empty_cart_coupon .mod_coupon_head {
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  justify-content: space-between;
}

.empty_cart_coupon .mod_coupon_get {
  -webkit-flex-shrink: 0;
  flex-shrink: 0;
  max-width: 150px;
  height: 30px;
  overflow: hidden;
  color: #fff;
  font-size: 14px;
  line-height: 30px;
  background-image: -webkit-linear-gradient(right, #f2270c, #ff9574);
  background-image: linear-gradient(-90deg, #f2270c, #ff9574);
  box-shadow: 0 5px 10px 0 rgba(233, 59, 61, 0.2);
  border-radius: 15px;
  padding: 0 15px;
}

.empty_cart_coupon .mod_coupon_title {
  display: flex;
  font-size: 15px;
  color: #333;
  line-height: 30px;
  margin-left: 0px;
}

.recomm_mod_title {
  position: relative;
  margin: 15px 0;
  height: 1em;
  line-height: 1em;
  text-align: center;
  font-size: 12px;
  color: #999;
}

.recomm_mod_title:after {
  content: "";
  position: absolute;
  z-index: 1;
  pointer-events: none;
  background-color: #ccc;
  height: 1px;
  left: 0;
  right: 0;
  top: 0;
  left: 10px;
  right: 10px;
  top: 50%;
}

.recomm_mod_title .recomm_mod_title_text {
  z-index: 2;
  position: relative;
  padding: 0 15px;
  background-color: rgb(242, 242, 242);
}

.recomm_mod_title .recomm_mod_title_text:after,
.recomm_mod_title .recomm_mod_title_text:before {
  content: "";
  position: absolute;
  top: 50%;
  margin-top: -2px;
  width: 4px;
  height: 4px;
  background-color: #ccc;
  transform: rotate(45deg);
}

.recomm_mod_title .recomm_mod_title_text:before {
  left: 0;
}

.recomm_mod_title .recomm_mod_title_text:after {
  right: 0;
}

.recomm_mod_title .recomm_mod_title_text:after,
.recomm_mod_title .recomm_mod_title_text:before {
  content: "";
  position: absolute;
  top: 50%;
  margin-top: -2px;
  width: 4px;
  height: 4px;
  background-color: #ccc;
  transform: rotate(45deg);
}

.mod_recommend_v2 .list li {
  background: #fff;
  position: relative;
  float: left;
  width: 50%;
  margin-bottom: 1px;
  padding: 15px 15px 0;
  box-sizing: border-box;
  border-radius: 10px;
}

.mod_recommend_v2 .list .cover img {
  max-width: 100%;
  max-height: 100%;
  left: 50%;
  top: 50%;
}

img {
  border: 0;
  vertical-align: top;
}

.mod_recommend_v2 .mod_tag {
  display: inline-block;
  vertical-align: middle;
  height: 14px;
}

.mod_recommend_v2 .mod_tag .tag_img,
.mod_recommend_v2 .mod_tag img {
  display: inline-block;
  height: 100%;
  margin-right: 1px;
}

.mod_recommend_v2 .list .rec_name {
  margin: 12px 0 4px;
  font-size: 12px;
  color: #333;
  line-height: 18px;
  height: 36px;
}

.mod_recommend_v2 .list .rec_name {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.flex_wrap {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.mod_recommend_v2 .list .flex_wrap .price {
  font-size: 12px;
  color: #e93b3d;
  margin-right: 3px;
  line-height: 20px;
}

.list {
  list-style: none;
}
</style>