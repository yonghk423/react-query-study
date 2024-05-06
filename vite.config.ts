// vite.config.js
export default {
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080', // Spring 서버 주소
        changeOrigin: true,
        rewrite: (path: any) => path.replace(/^\/api/, '')
      }
    }
  }
}