// 读web层文件
var fs = require("fs");
// var path = require("path")
var globalConfig = require("./config");


var controllerSet = [];
var map = new Map();
// var path = path.resolve(__dirname, globalConfig["web_path"])
// var path = globalConfig["web_path"]


function compare(arr, taregt) {
    for(var i = 0; i < arr.length; i ++) {

    }
}

var files = fs.readdirSync("./" + globalConfig["web_path"]);

for( var i = 0; i < files.length; i ++) {
    
    try {
        var file = require("./" + globalConfig["web_path"] + "/" + files[i])
    } catch (e) {
        console.log(e)
    }

  for( var [key, value] of file) {
      if( map.get(key) == null ) {
          map.set(key, value)
      } else {
          throw Error(" url 异常， url：" + key)
      }
  }
  controllerSet.push(file)
}

module.exports = map;