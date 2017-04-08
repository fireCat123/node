'use strict'
//应用模板
const http = require('http');
const path = require('path');
const fs = require('fs');
//创建web服务
const server = http.createServer();

//获取json数据的路径
const datas = require(path.join(__dirname,'datas.json'));
// const conHtml = require(path.join(__dirname,'index.html'));
//请求 处理 响应
server.on('request',(req,res)=>{
    
    //   console.log(html);
      if(req.url.includes('index.html')||req.url=='/'){
          fs.readFile(path.join(__dirname,'index.html'),(err,data)=>{
              if(err){
                  console.log(err);
              }
              //拼接字符串
            let html = '<ul>';
            for(var i=0; i<datas.length; i++){
                html+='<li>'+datas[i]+'</li>';
            }
            html+='</ul>';
            //获取index.html页面的所有内容，并转为字符串
            let htmlContent = data.toString();
            //替换index中所有${content}的内容
            htmlContent = htmlContent.replace('${content}',html);
            console.log(htmlContent);
            res.setHeader('Content-Type','text/html;charset=utf-8');
            res.end(htmlContent);
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