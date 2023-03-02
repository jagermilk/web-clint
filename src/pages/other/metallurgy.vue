<template>
    <div>
      <nav-header></nav-header>
      <div style="padding:50px">
        <tinymce></tinymce>
      </div>
      
      <nav-footer></nav-footer>
    </div>
  </template>
  <script>
  import NavHeader from '../../components/NavHeader.vue'
  import NavFooter from '../../components/NavFooter.vue'
  import tinymce from '../../components/Tinymce.vue'
  export default {
    components: { NavHeader, NavFooter,tinymce },
    name: 'home',
  }
  </script>
  