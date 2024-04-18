import request from './request'

export function login(data) {
	return request.post('/login', data)
}

export function getTest(params) {
	return request.get('/api/getTest', params)
}

export function getInfo(data) {
	return request.post('/info', data)
}