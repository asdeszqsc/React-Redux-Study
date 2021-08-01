const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function(app){
    app.use(
      "/api",
      createProxyMiddleware({
        target: "http://49.50.167.77:5000/",
        changeOrigin: true
      })
    );
};