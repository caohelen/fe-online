<template>
  <div>
		<mainNav></mainNav>
		<router-view></router-view>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import { login, getInfo } from './api/index'
import { setToken, getToken } from './utils/token'
import { useRoute, useRouter } from 'vue-router'
import mainNav from "./components/main-nav.vue";

const router = useRouter()
const route = useRoute()

</script>


<style scoped>

</style>
