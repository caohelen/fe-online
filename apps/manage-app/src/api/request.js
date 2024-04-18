import axios from 'axios';
import { getToken } from '../utils/token'

const ins = axios.create({
	baseURL: '/api',
	headers: {
		Authorization: `${getToken()}`,
	}
})

ins.interceptors.response.use(async (res) => {
	// let token
	// if(res.headers.authorization) {
	// 	token = res.headers.Authorization.replace('Bearer', '')
	// }
	// setToken(token)
	// ins.defaults.headers.Authorization = `Bearer ${token}`
	// if(res.headers.refreshtoken) {
	// 	const refreshtoken = res.headers.refreshtoken
	// 	setRefreshToken(refreshtoken)
	// }
	// if(res.data.code === 401 && !isRefreshRequest(res.config)) {
	// 	const isSuccess = await refreshToken()
	// 	// 是否判断到了token
	// 	if(isSuccess) {
	// 		// 刷新token
	// 		await refreshToken()
	// 		console.log('====================================');
	// 		console.log('重新请求');
	// 		console.log('====================================');
	// 		res.config.headers.Authorization = `Bearer ${getToken()}`
	// 		const resp = await ins.request(res.config)
	// 		return resp
	// 	} else {
	// 		// 无权限
	// 		console.log('跳转到登录页');
	// 		return res.data
	// 	}
	// }
	return res.data

})

export default ins