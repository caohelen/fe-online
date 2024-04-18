import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3002,
		headers: {
			"Access-Control-Allow-Credentials": true,
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Headers": "X-Requested-With,Content-Type",
			"Access-Control-Allow-Methods": "PUT,POST,GET,DELETE,OPTIONS",
		},
		proxy: {
      '/api': {
        target: 'http://localhost:5001',
        changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})
