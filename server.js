var http = require('http');
var url=require('url');
http.createServer(function (request, response) {
    var pathname = url.parse(request.url).pathname;
    var content = '';
    var opt = {
         host:'api.jisuapi.com',
         port:'80',
         method:'GET',
         path:'/illegal/query?appkey=e8fe74557b878da8&carorg=guangxi&lsprefix=%E6%A1%82&lsnum=BYH621&lstype=02&frameno=6&engineno=896109&iscity=1'
    };
    console.log(opt);
    var req = http.request(opt, function(res) {
        res.on('data',function(body){
            console.log('return');
            content+=body;
        }).on("end", function () {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(content);
            response.end();
        });
    }).on('error', function(e) {
        console.log("Got error: " + e.message);
    });
    req.end();
}).listen(8081);//监听端口80,将80端口的请求转发到news.163.com
console.log("Server runing at port: " + 80 + ".");