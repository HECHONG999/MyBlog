let path = new Map()
function queryAllBlogCount(request, response) {
    response.end("Hello")
}


path.set("/queryAllBlogCount",queryAllBlogCount)
module.exports = path;