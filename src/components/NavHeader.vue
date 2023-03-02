<template>
  <!-- 顶部导航 -->
  <div class="header">
    <Topbar></Topbar>
    <Downdrop :navlist="navlist">
</Downdrop>
   
  </div>
</template>

<script>
import Downdrop from './Downdrop.vue';
import Topbar from './TopBar.vue';
export default {
    name: "nav-header",
    data() {
        return {
            redmiList: [
                {
                    img: "/imgs/nav-img/nav-6.png",
                    title: "RedMi红米 K50pro",
                    price: "5999元"
                },
                {
                    img: "/imgs/nav-img/nav-5.png",
                    title: "RedMi红米 note6",
                    price: "2999元"
                },
                {
                    img: "/imgs/nav-img/nav-4.png",
                    title: "RedMi红米 Mix",
                    price: "3999元"
                },
                {
                    img: "/imgs/nav-img/nav-3.png",
                    title: "RedMi红米 k40 plus",
                    price: "5688元"
                },
                {
                    img: "/imgs/nav-img/nav-2.png",
                    title: "RedMi红米 K50",
                    price: "6228元"
                },
                {
                    img: "/imgs/nav-img/nav-1.png",
                    title: "RedMi红米 8plus",
                    price: "4890元"
                }
            ],
            tvList: [
                {
                    img: "/imgs/nav-img/nav-3-1.jpg",
                    title: "小米壁画电视 65英寸",
                    price: "5999元"
                },
                {
                    img: "/imgs/nav-img/nav-3-2.jpg",
                    title: "小米全面屏电视 60英寸",
                    price: "2999元"
                },
                {
                    img: "/imgs/nav-img/nav-3-3.png",
                    title: "小米电视LED 70英寸",
                    price: "3999元"
                },
                {
                    img: "/imgs/nav-img/nav-3-4.jpg",
                    title: "小米超清电视",
                    price: "5688元"
                },
                {
                    img: "/imgs/nav-img/nav-3-5.jpg",
                    title: "小米OLED 屏幕电视",
                    price: "6228元"
                },
                {
                    img: "/imgs/nav-img/nav-3-6.png",
                    title: "小米环绕屏电视 60英寸",
                    price: "4890元"
                }
            ],
            phoneList: [],
            navlist:[
                {
                name:'产品模块',
                id:1,
                children:[
                    {
                    name:'运营管理',
                    to:'online',
                    id:11
                },
                    {
                    name:'生产技术服务',
                    to:'techservice',
                    id:12
                },
                    {
                    name:'功能承包服务',
                    to:'functionservice',
                    id:13
                },
                    {
                    name:'装备技术咨询及供货',
                    to:'mechineservice',
                    id:14
                },
            ]
            },
                {
                name:'生产技术服务',
                id:2,
                children:[
                    {
                    name:'需求上传',
                    to:'addrecommonds',
                    id:21
                },
                    {
                    name:'技术澄清',
                    to:'verifyrecommonds',
                    id:22
                },
                    {
                    name:'需求列表',
                    to:'recommondslist',
                    id:23
                }
            ]
            },
            {
                name:'供应商合作',
                to:'supplier',
                id:3,
            },
            {
                name:'冶金技术之窗',
                to:'metallurgy',
                id:4,
            },
            {
                name:'案例库',
                to:'example',
                id:5,
            },
            {
                name:'与我联系',
                to:'contact',
                id:6,
            },
        ]
        };
    },


    components: { Downdrop, Topbar }
};
</script>

<style lang="scss" scoped>
// @import "./../assets/scss/base.scss";
// @import "./../assets/scss/config.scss";
.header {


}

</style>