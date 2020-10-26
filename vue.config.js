//vue.config.js   vue项目的配置文件 文件名字固定   修改完成后一定要重启
module.exports = {
  publicPath:"./",
  devServer: {
    host: "0.0.0.0", //配置一个主机名 不固定ip 默认localhost
    port: "9527", //配置端口号
    open: true, //是否自动打开浏览器
    proxy: {
      "/api": {
        target: "http://localhost:3000/api/", //要代理的域名  本地的数据库
        changeOrigin: true, //开启代理，允许跨域访问
        pathRewrite: {
          "^/api": "",
        },
      },
      "/dscmall": {
        target: "https://x.dscmall.cn/api/", //大商创官网数据库
        changeOrigin: true, //开启代理，允许跨域访问
        pathRewrite: {
          "^/dscmall": "",
        },
      },
      "/api2": {
        // http://39.101.210.136:3000/api/v1/search?keywords=小米&size=10&page=1
        target: "http://39.101.210.136:3000/api/", //要代理的域名  老师的数据库
        changeOrigin: true, //开启代理，允许跨域访问
        pathRewrite: {
          "^/api2": "",
        },
      },
    },
  },
};
