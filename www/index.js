
let request = require('request');
let http = require('http');
let querystring = require('querystring');
let url = 'https://moment.douban.com/api/stream/date/2016-08-20?alt=json&apikey=0bcf52793711959c236df76ba534c0d4&app_version=1.7.4&douban_udid=d623045db9fcb0d5243174c1bf1a675f887047c0&format=full&udid=9a34d8b038ff38971050199b0c5ee9c60c6d1ca3&version=6';
request(url,(error,response,body)=>{
    var server = http.createServer(function(req,res){
        // console.log(req.url);
        var myUrl = req.url;
        if(!req.url.includes('callback=')){
            return res.end('error');
        }else{
            var cbFn = querystring.parse(myUrl.split('?')[1])['callback'];
            res.end(cbFn + '(' + body + ')');
        }
        
    });
    server.listen(3000,function(){
        console.log('server is listen at port 3000');
    })
});