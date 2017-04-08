'use strict'
//引用模板
const http = require('http');
const fs = require('fs');
const path = require('path');
//创建web服务
const server = http.createServer();
//获取json数据
const datas = require(path.join(__dirname,'datas.json'));
//请求 处理 响应
server.on('request',(req,res)=>{
    //判断是否当前地址是否符合条件
   if(req.url.includes('index.html') || req.url=='/'){
       //读取index.html所有内容
       fs.readFile(path.join(__dirname,'index.html'),(err,data)=>{
           if(err){
               console.log(err);
           }
           //将内容转化为字符串
           let contentHtml = data.toString();
           let html = '<ul>';
            for(var i=0; i<datas.length; i++){
                html+='<li>'+datas[i]+'</li>';
            }
            html+='</ul>';
            //将index.html中所有${content}替换为html
            contentHtml=contentHtml.replace('${content}',html);
            console.log(contentHtml);
            res.setHeader('Content-Type','text/html;charset=utf-8');
            res.end(contentHtml);
       })
       
       
   }
})
//监听
server.listen(3000,'127.0.0.1',(err)=>{
    if(err){
        console.log(err);
    }
    console.log('响应成功');
})