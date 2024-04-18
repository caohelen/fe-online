export const setToken = (token) => {
	localStorage.setItem('Authorization', token)
}

export const getToken = () => {
	return localStorage.getItem('Authorization')
}

export const setRefreshToken = (token) => {
	localStorage.setItem('Refreshtoken', token)
}

export const getRefreshToken = (token) => {
	localStorage.getItem('Refreshtoken')
}
