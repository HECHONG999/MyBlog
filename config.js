const fs = require("fs");
/**
 * 读取配置文件: 映射成对象
 */
let config = fs.readFileSync("./server.conf").toString().split("\r\n");  // readFileSync: 同步读取系统文件
let globalConfig = {}; // {port: "12306",web_path: "web"}
for(let i = 0; i < config.length; i ++) {
   let [key, value] = config[i].split("=");
   globalConfig[key.trim()] = value.trim();
}

module.exports =  globalConfig;  // nodeJs是基于ConmonJs规范
