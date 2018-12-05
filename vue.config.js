// nodeJS的path模块
const path = require('path');
function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  baseUrl: process.env.NODE_ENV === "production" ? "./" : "/", // 相当于webpack的output.publicPath
  outputDir: "./lala", // 相当于webpack的output.path
  assetsDir: "./", // 打包生成的静态资源
  indexPath: "index.html", // 打包输出路径（相对于outputDir）
  filenameHashing: true, // 生成的静态文件名是否有哈希值
  lintOnSave: true, // eslint错误显示形式 boolean | 'error' ，'error'输出到浏览器遮罩中，true输出到控制台中，false不输出
  transpileDependencies: [], // Babel显式转换依赖关系的文件
  // configureWebpack: (config) => {
  //   config.module
  //     .plugins('');
  // }, // webpack配置（基础配置）
  chainWebpack: (config) => {
    config.resolve.alias
        .set("@",resolve("src"))
  }, // 维护内部webpack配置,能够定义命名加载器规则和命名插件
};
