module.exports = {
    // publicPath:'./',
    devServer: {
        port: 8081,
      proxy: {
        '/': {
          target: 'http://localhost:8080',
          // target: 'http://192.168.0.101:18081',
          // target: process.env.VUE_APP_BASE_API,
          changeOrigin: true,
          // ws: true,
          // pathRewrite: {
          //   '^/api': 'htttp://127.0.0.1:8031'
          // }
        }
      }
    }
};