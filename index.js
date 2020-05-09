const express = require("express");
const loader = require("./loader");

const app = new express();

app.get("/queryAllBlogCount", loader.get("/queryAllBlogCount"))
app.use(express.static("./page"));      //读取page下的index.html静态文件

app.listen("12306", () => {
    console.log("服务已经启动 ~~~~")
})