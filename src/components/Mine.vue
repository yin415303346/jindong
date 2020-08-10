<template>
    <div class="my-jindong">
        <div class="my-top">
            <div class="my-top-left" @click="$router.go(-1)">
                <img src="../assets/left.png" alt="">
            </div>
            <div class="my-top-mid">
                我的京东
            </div>
            <div class="my-top-right">
                <img src="../assets/more.png" alt="">
            </div>
        </div>
        <div class="my-concent">
            
        </div>
        <div class="my-recommend">
            
        </div>
        <!-- <div class="my-floor"> -->
            <div class="float my-floor">
                <router-link to="/">
                    <div class="floatImg">
                        <img src="../assets/home.png"/>
                    </div>
                </router-link>
                <router-link to="/classify">
                    <div class="floatImg">
                        <img src="../assets/classfiy.png"/>
                    </div>
                </router-link>
                <div class="floatImg">
                    <a href="https://wq.jd.com/mcoss/wxmall/home?ptype=2&ptag=138097.1.6&sceneval=2&fromM=1">
                    <img src="../assets/jinxi.png" />
                    </a>
                </div>
                <router-link to="/shop-car">
                    <div class="floatImg">
                        <img src="../assets/shopcar.png"/>
                    </div>
                </router-link>
                <div class="floatImg">
                    <img src="../assets/enterq.png" />
                </div>
            </div>
        </div>
    <!-- </div> -->
</template>

<script>
export default {
    
}
</script>

<style scoped>
*{
    padding: 0;
    margin: 0;
}
.my-jindong{
    height: 100%;
    width: 100%;
    background: rgb(247,247,247);
    position: relative;
}
.my-top{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 8px;
    background: #fff;
}
.my-top-left{
    width: 30px;
    height: 30px;
}
.my-top-left img{
    width: 100%;
}
.my-top-right{
    width: 25px;
    height: 25px;
}
.my-top-right img{
    width: 100%;
}
.my-floor{
    position:fixed;
    width: 100%;
    bottom: 0;
}
</style>