<template>
    <div id="header">
        <div id="header-top">
            <ul id="leftlist" class="list">
                <li><a href="#" class="link">您好!18203099594</a></li>
                <li><a href="#" class="link">您尚未完善企业信息 去完善</a></li>
            </ul>
            <ul id="rightlist" class="list">
                <li class="haschild"><a href="#" class="link">
                    <i class="el-icon-chat-dot-square"></i>
                    消息
                    <i class="el-icon-caret-bottom" style="font-size:10px;"></i>
                    </a>
                    <ul class="message-showdetail">
                        <div class="top">最新消息</div>
                        <div class="middle">暂无消息</div>
                        <div class="bottom">
                            <a href="#">查看更多</a>
                            </div>
                    </ul>
                </li>
                <li class="haschild">
                    <a href="#" class="link" title="myorders">
                        <i class="el-icon-s-order"></i>
                        
                        我的订单
                        <i class="el-icon-caret-bottom" style="font-size:10px;"></i>
                    </a>
                    <ul class="showdetail">
                           <li> <router-link :to="{name:'order'}" class="item">全部订单</router-link>
                    </li>
                        <li><a href="#" class="item">合同信息</a></li>
                    </ul>
                </li>
                <li><a href="#" class="link">
                    <i class="el-icon-user"></i>
                    
                    个人中心
                    <i class="el-icon-caret-bottom" style="font-size:10px;"></i>
                </a></li>
                <li class="haschild">
                    <a href="/login" class="link">
                        <i class="el-icon-service"></i>
                        联系客服
                    </a>

                </li>
                <li><a href="#" class="link">平台首页</a></li>
                <li class="haschild"><a href="#" class="link">当前
                    <i class="el-icon-caret-bottom" style="font-size:10px;"></i>
                    </a>
                    <ul class="showdetail">
                        <li><a href="#" class="item">供应商</a></li>
                        <li><a href="#" class="item">客户</a></li>
                        <li><a href="#" class="item">运营顾问</a></li>
                    </ul>
                </li>
                <li class="haschild"><a href="#" class="link">语言
                    </a>
                    <ul class="showdetail">
                        <li><a href="#" class="item" @click="$i18n.locale = 'en'">英文</a></li>
                        <li><a href="#" class="item" @click="$i18n.locale = 'zh'">中文</a></li>
                    </ul>
                </li>
               

                
                <li><a href="#" class="link">帮助中心</a></li>
            </ul>
        </div>
        <div class="header-search">
            <div class="wrapper">
                <el-select v-model="optionvalue" placeholder="标件" class="header-select">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
                <input type="text" name="keyword"/>
                <a href="javascript:;">
                    <i class="el-icon-search"></i>
                </a>
            </div>
            <div>
                <el-button size="medium" class="fororder">批量下单/询价</el-button>
                <el-button size="medium" class="forcar">购物车</el-button>
            </div>
            <!-- {{$t('message')}} -->
        </div>
    </div>
</template>

<script>
export default {
    name:'Topbar',
    data() {
        return {
            optionvalue: '选项1',
            options: [{
                value: '选项1',
                label: '标件'
            }, {
                value: '选项2',
                label: '非标件'
            }]
        }
    },

}
</script>

<style lang="scss" scoped>

// 搜索栏
.header-search {
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;

    .wrapper {
        width: 400px;
        height: 40px;
        border: 1px solid #e0e0e0;
        margin-right: 10px;
        @include flex();
        border: 1px solid rgb(209, 150, 39);
        background-color: rgb(240, 164, 24);
        .header-select {
            width: 100px;
        }

        input {
            border: none;
            box-sizing: border-box;
            border-right: 1px solid #e0e0e0;
            width: 264px;
            height: 40px;
            padding-left: 14px;
        }

        i{
            width: 40px;
            text-align: center;
            color: rgb(71, 71, 71);
            font-weight: 600;
        }
    }
    
// 搜索栏
.fororder{
    display: inline-block;
    width: 121px;
    line-height: 40px;
    background: #003399;
    color: #ffffff!important;
    text-align: center;
    box-sizing: border-box;
    text-decoration: none;
    margin-right: 10px;
}
.forcar{
    padding: 8px 30px 5px 31px;
    background-image: none;
    position: relative;
}
}



#header-top {
    height: 40px;
}



i{
    font-size: 18px;
    vertical-align:middle;
    font-weight: 600;
    color: rgb(254, 204, 3);
}

/*顶部导航菜单*/
body {
    overflow-x: hidden; /*当浏览器调正的宽度小于页面宽度时，不显示横向滚动条*/
    font-family: "microsoft yahei";
    
}

a {
    font-size: 13px;
    text-decoration: none;
}




#header {
    font-size: 10px;
    position: relative;
    z-index: 1000;
    height: 90px;
    background-image: url("../../public/imgs/nav-img/top_background.webp");
    background-repeat: no-repeact;
    padding: 0 5% ;
}

/*响应式布局，当浏览器页面宽度小于等于顶部导航条指定宽度时，固定为指定宽度*/
// @media screen and (max-width: 880px) {
//     #header {
//         width: 880px;
//     }
// }

#leftlist {
    float: left;
    margin-left: 100px;
}

#rightlist {
    float: right;
    margin-right: 100px;
}

.list > li {
    float: left;
    position: relative;
}

.link {
    display: block;
    padding: 0px 8px;
    line-height: 35px;
    color: white;
}

.link:hover {
    color: black;
}

// 普通下拉菜单样式
.haschild:hover .link {
    background-color: white;
    color: black;
}

/*显示下拉菜单*/
.haschild:hover .showdetail {
    display: block;
    border-width: 1px;
    border-style: solid;
    border-color: transparent gainsboro gainsboro gainsboro;
}

.showdetail {
    position: absolute;
    top: 35px;
    left: 0px;
    display: none;
    background-color: white;
    .item {
    color: black;
    display: block;
    width: 75px;
    height: 24px;
    line-height: 24px;
    padding-left: 10px;
}

.item:hover {
    color: #a9a9a9;
    background: rgb(255, 179, 2);
}
}
//消息页面下拉样式
.haschild:hover .message-showdetail {
display: block;
    border-width: 1px;
    border-style: solid;
    border-color: transparent gainsboro gainsboro gainsboro;
    width: 300px;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
.haschild .message-showdetail {
    
    position: absolute;
    top: 35px;
    left: 0px;
    display: none;
    background-color: white;

    .top{
        height: 20px;
    }
    .middle{
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .bottom{
        height: 20px;
        text-align: center;
    }
}




/*内容部分*/
#content {
    width: 1192px;
    height: 40px;
    margin: 0px auto 10px auto;
    overflow: hidden;
    line-height: 40px;
}
/*多级菜单（导航菜单+多级菜单）*/
#shopmenus {
    width: 100%;
    height: 30px;
    line-height: 30px;
    background-color: rgba(39, 39, 39, 0.81);
    margin-top: 140px;
    text-align: center;
}

#smenus > li {
    position: relative;
    display: inline-block;
    /*兼容IE6、7行内块级元素*/
    *display: inline;;
    *zoom: 1;

}

.smenu {
    display: block;
    width: 100px;
    color: white;
    font-size: 15px;
}

.smenu:hover {
    background-color: crimson;
}

.hasmenu:hover .catalogs {
    display: block;
}

.hasmenu:hover .smenu {
    background-color: crimson;
}

.hasmenutwo:hover .twocatalog {
    display: block;
}

.catalogs, .twocatalog {
    position: absolute;
    background-color: white;
    display: none;
    z-index: 50;
}

.catalogs {
    top: 30px;
    left: -1px;
}

.twocatalog {
    top: 0px;
    left: 142px;
}

.class {
    display: block;
    width: 130px;
    height: 25px;
    line-height: 25px;
    color: black;
    padding: 0px;
    margin: 0px;
    text-align: left;
    border: 1px solid #e4e4e4;
    border-top: 0px;
}

.class:hover {
    background-color: #e4e4e4;
}

</style>