<template>
  <div>
    <nav-header></nav-header>
    <div class="content" style="width: 200px;height:600px;">
    <div class="left" style="width: 130px;height:600px;">
    <el-menu
      default-active="1-1"
      class="el-menu-vertical-demo"
     
      :collapse="false"
      :unique-opened="false"
     >
      <el-submenu index="1">
        <template #title>
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <router-link :to="{name:'list'}">
            <el-menu-item index="1-1">全部订单</el-menu-item>
          </router-link>
          <router-link :to="{name:'confirm'}">
            <el-menu-item index="1-2">合同信息</el-menu-item>
          </router-link> 
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span>云监制</span>
      </el-menu-item>
      <el-submenu index="3">
        <template #title>
          <i class="el-icon-location"></i>
          <span>资料管理</span>
        </template>
        <el-menu-item-group>
          <router-link :to="{name:'list'}">
            <el-menu-item index="3-1">个人资料</el-menu-item></router-link>
          <router-link :to="{name:'confirm'}">
            <el-menu-item index="3-2">收货信息
            </el-menu-item></router-link>
          <router-link :to="{name:'confirm'}">
            <el-menu-item index="3-3">发票信息
            </el-menu-item></router-link>
          <router-link :to="{name:'confirm'}">
            <el-menu-item index="3-4">修改密码
            </el-menu-item></router-link>
         
        </el-menu-item-group>

         

      </el-submenu>
      <el-menu-item index="5">
        <i class="el-icon-menu"></i>
        <span slot="title">物流信息</span>
      </el-menu-item>
      <el-menu-item index="6">
        <i class="el-icon-menu"></i>
        <span slot="title">售后信息</span>
      </el-menu-item>
    </el-menu>
</div>
  <div class="right">
  <router-view /></div>
</div>
    <service-bar />
    <nav-footer />
  </div>
</template>

<script>
import NavFooter from '../../components/NavFooter.vue';
import NavHeader from '../../components/NavHeader.vue';
import ServiceBar from '../../components/ServiceBar.vue';
export default {
  name: 'order',
  components: { NavFooter, ServiceBar,NavHeader },
  data() {
    return {};
  },
  mounted() {},
  methods: {
     
    }
};
</script>
<style lang='scss' scoped>
.content{
  display: flex;
}
// 更改el-menu样式
::v-deep .el-menu-vertical-demo , .el-menu{
  height: 600px;
}
::v-deep .el-menu-item, .el-submenu__title{
  height: 30px;
    line-height: 30px;
    padding: 0px;
    min-width: 100px;
}
::v-deep .el-submenu .el-menu-item{
  height: 30px;
    line-height: 30px;
    padding: 0px;
    min-width: none;
}
</style>