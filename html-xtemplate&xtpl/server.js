'use strict'
//应用模板
const http = require('http');
const path = require('path');
const fs = require('fs');
const xtpl = require('xtpl');
//创建web服务
const server = http.createServer();

//获取json数据的路径
const datas = require(path.join(__dirname,'datas.json'));
// const conHtml = require(path.join(__dirname,'index.html'));
//请求 处理 响应
server.on('request',(req,res)=>{
    if(req.url.includes('index.html') || req.url=='/'){
        //第一个参数为要替换的文件，xtpl.renderFile对fs.readFile的封装
        //第二个参数为页面中要替换的数据
        //第三个参数为回调函数，其中可以通过回调函数的参数中的content获取到生成好的html
        xtpl.renderFile(path.join(__dirname,'index.html'),{
            array:datas
        },(err,content)=>{
            console.log(content);
            res.setHeader('Content-Type','text/html;charset=utf-8');
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