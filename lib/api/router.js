const http = require('http')

var createRouter = function (port){

    let api = {};
    let routes = {}
    let methods = ['GET','POST']; 

    const interceptors = [];

    methods.forEach(function(method){
        routes[method] = {};
        api[method.toLowerCase()] = function (path,fn) {
            routes[method][path] = fn;
        };
    });
    // api.interceptors = function name(interceptor) {
    //     interceptors.push(interceptor)
    // }

    // var executeInterceptors = function (number , res) {
    //     var interceptor = interceptors[number]
    //     if(!interceptors) return;
    //     interceptor(req,res,function (params) {
    //         executeInterceptors(++number, req, res);
    //     });
    // };

    http.createServer(function(req, res){
        res.setHeader("Access-Control-Allow-Origin", "*");
        // handleInterceptors(req, res);
        if(!routes[req.method][req.url]){ 
            res.statusCode = 404;
            return res.end();
        }
        routes[req.method][req.url](req,res);
    }).listen(port);

    return api;  
};
module.exports = createRouter;