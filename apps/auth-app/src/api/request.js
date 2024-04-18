import axios from 'axios';

const ins = axios.create({
	baseURL: '/api',
})

ins.interceptors.response.use(async (res) => {
	return res.data

})

export default ins