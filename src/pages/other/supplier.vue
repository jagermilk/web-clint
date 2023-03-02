<template>
    <div>
      <nav-header></nav-header>
      供应商
      <nav-footer></nav-footer>
    </div>
  </template>
  <script>
  import NavHeader from '../../components/NavHeader.vue'
  import NavFooter from '../../components/NavFooter.vue'
  export default {
    components: { NavHeader, NavFooter },
    name: 'home',
  }
  </script>