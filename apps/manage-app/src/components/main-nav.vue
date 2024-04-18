<template>
	<div>
		<el-menu
			:default-active="activeIndex"
			mode="horizontal"
			@select="handleSelect"
		>
			<el-menu-item 
				v-for="(item, index) in NAV_LIST" 
				:key="index"
				:index="index">
				{{item.name}}
			</el-menu-item>
		</el-menu>
	</div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { NAV_LIST } from './dict'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter();
const route = useRoute();

const activeIndex = ref(0)

onMounted(() => {
	const targetRoute = NAV_LIST.find(item => item.url === route.fullPath)
	handleSelect(targetRoute.value)
})

const handleSelect = (key) => {
	const targetRoute = NAV_LIST.find(item => item.value === key)
	router.push(`${targetRoute.url}`)
	activeIndex.value = key
}

</script>