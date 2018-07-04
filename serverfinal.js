var restify = require("restify");

function userlogin(req,res,next){

        console.log("login /userlogin");
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
        res.header("X-Powered-By",' 3.2.1');
        res.header("Content-Type", "application/json;charset=utf-8");

        var message1={success:true}
        var meaasge2={success:false}
        if(req.params.user == 'admin'&& req.params.password=='admin'){

        res.send(message1)
        }
        else res.send(message2)
}

function response(req, res, next) {

        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
        res.header("X-Powered-By",' 3.2.1');
        res.header("Content-Type", "application/json;charset=utf-8");

        console.log("POST /find/rapinfo");
        res.send('{"RAP_IP": "10.1.1.1","RF_num": 3,"RFtype": "AAAA", "BTStype": "BBBB"}');
        };

var server = restify.createServer();
server.use(restify.plugins.bodyParser());
server.use(restify.plugins.queryParser());
server.use(restify.plugins.acceptParser(server.acceptable));
server.post('/find/rapinfo',response);
server.post('/userlogin',userlogin);

server.listen(3912, function() {
        console.log("%s listening at %s", server.name, server.url);
});
