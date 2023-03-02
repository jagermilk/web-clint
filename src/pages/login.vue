<template>
    <div class="login">
               <input type="text" v-model="name" id="userid" placeholder="账户名"> 
            <button @click="goTUIKit" id="submit">登陆</button>
    </div>
</template>

<script setup>
import { ref, onMounted,getCurrentInstance } from 'vue'

const { proxy }= getCurrentInstance()
const router = proxy.$routerG
  const name = ref('')
  function goTUIKit() {
    console.log(router);
    if (name.value) {
      router.push({
        path: '/contactme',
        query: {
          name: name.value
        }
      })
    }}
  

  onMounted(() => {
    // Do something when component is mounted
  })


</script>

<style lang="less" scoped>

</style>