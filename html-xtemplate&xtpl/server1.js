'use strict'
//引用模板
const http = require('http');
const xtpl = require('xtpl');
const path = require('path');
//创建web服务
const server =http.createServer();
const datas = require(path.join(__dirname,'datas.json'));
//请求 处理 响应
server.on('request',(req,res)=>{
     if(req.url.includes('index.html') || req.url=='/'){
            xtpl.renderFile(path.join(__dirname,'index.html'),{
                array:datas
            },function(error,content){
               res.setHeader('Content-Type','text/html;charset=utf8');
               res.end(content);
         });
     }
    
})
//监听
server.listen(3000,'127.0.0.1',(err)=>{
    if(err){
        console.log(err);
    }
    console.log('响应成功');
})