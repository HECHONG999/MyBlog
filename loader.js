/**
 * loader层:client端向index发送urldi地址请求数据 loader读取web层的业务接口
 * 有该url对应的接口,打入Dao层返回数据, 没有，则抛出错误
 * @ Date 2020-5-10
 */
const fs = require("fs");
const path = require("path"); // 读取文件的绝对路径
const globalConfig = require("./config");
let controllerSet = [];
let map = new Map();        // Map数据结构:数据唯一特性 -- get和set方法获取或设置数据

let dirs = fs.readdirSync(path.resolve(__dirname, globalConfig["web_path"]));  //readdirSync:同步读取文件的目录

/**
 * 读取web文件,封装url请求数据的业务逻辑接口
 * @param {*} dirs 
 */
function readFiles(dirs) {
    let fileArr;
    for(let i = 0; i < dirs.length; i ++) {
       try {
        fileArr = require("./" + globalConfig["web_path"] +"/"+ dirs[i]); // { queryAllBlogCount: [Function: queryAllBlogCount] }
       } catch(e) {

           throw Error("loader File" + "文件读取错误" + e)
       }
        for( let [key,value] of fileArr) {
            if(map.get(key) == null) {       // 如果map中没有此url地址，就添加该url的服务接口
                map.set(key, value);
            }else {
                throw Error("loader报错 : client端请求 url 异常， url：" + key)
            }
        }
        controllerSet.push(fileArr)
    }
}

readFiles(dirs);

module.exports = map;