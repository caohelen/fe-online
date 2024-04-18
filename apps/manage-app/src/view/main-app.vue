<template>
	<div>
		<div>
			<el-button type="primary" @click="handleGetInfo">获取信息</el-button>
			<HelloWorld msg="Vite + Vue" />
		</div>
	</div>
</template>
<script setup>
import { ref } from 'vue'
import HelloWorld from '../components/HelloWorld.vue'
import { login, getInfo } from '../api/index'
import { setToken, getToken } from '../utils/token'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()

const handleGetInfo = () => {
	getInfo({token: getToken()}).then(res => {
		console.log(res)
		window.alert(`获取到信息${res.username}`)
	})
}

</script>