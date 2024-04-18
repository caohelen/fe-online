<template>
	<div>
		<WujieVue
			width="100%"
			height="100%"
			name="react-app"
			url="//localhost:3002/"
			:beforeLoad="beforeLoad"
			:beforeMount="beforeMount"
			:afterMount="afterMount"
			:beforeUnmount="beforeUnmount"
			:afterUnmount="afterUnmount"
			:sync="true"
		></WujieVue>
	</div>
</template>
<script setup>
const beforeLoad = () => {
	console.log('beforeLoad');
}
const beforeMount = () => {
	console.log('beforeMount');
}
const afterMount = () => {
	console.log('afterMount');
}
const beforeUnmount = () => {
	console.log('beforeUnmount');
}
const afterUnmount = () => {
	console.log('afterUnmount');
}
</script>
