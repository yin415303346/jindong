import Vue from "vue";
import VueRouter from "vue-router"
import main from "../components/Main.vue"
import Enter from "../components/Enter.vue"
import Search from "../components/Search.vue"
import Classify from "../components/Classify.vue"
import ShopCar from "../components/ShopCar.vue"
import Mine from "../components/Mine.vue"

Vue.use(VueRouter)
var routes = [
    {
        path:"/",
        component:main
    },
    {
        path:"/enter",
        component:Enter
    },
    {
        path:"/search",
        component:Search
    },
    {
        path:"/classify",
        component:Classify
    },
    {
        path:"/shop-car",
        component:ShopCar
    },
    {
        path:"/mine",
        component:Mine
    },
]
var router = new VueRouter({
    routes:routes
})
export {router};