'use strict'
//引用模板
const http = require('http');
const path = require('path');
const xtpl = require('xtpl');
const fs = require('fs');
const querystring = require('querystring');
//创建web服务
const server = http.createServer();
const datas = require(path.join(__dirname,'musics.json'));
//请求 处理 响应
server.on('request',(req,res)=>{
    //如果请求的地址符合要求，就替换页面中的占位符
    if(req.url.includes('index.html') || req.url=='/'){
        xtpl.renderFile(path.join(__dirname,'index.html'),{
	        music:datas
        },(error,content)=>{
        //    console.log(content); 
           res.setHeader('Content-Type','text/html;charset=utf8');
           res.end(content);
        });
        //如果地址中的含有site.css就读取文件，并相应到页面
    }else if(req.url.includes('site.css')){
        fs.readFile(path.join(__dirname,'statics/css/site.css'),(err,data)=>{
            if(err){
                console.log(err);
            }
           res.setHeader('Content-Type','text/css;charset=utf8');
           res.end(data);
        })
         //如果地址中的含有jquery.min.js就读取文件，并相应到页面
    }else if(req.url.includes('jquery.min.js')){
        fs.readFile(path.join(__dirname,'statics/js/jquery.min.js'),(err,data)=>{
           res.setHeader('Content-Type','text/javascript;charset=utf8');
           res.end(data);
        })
         //如果地址中的含有.mp3就读取文件，并相应到页面
    }else if(req.url.includes('.mp3')){
        //因为带有中文的面子，会被编码，所以请求时需要用querystring.unescape进行解码
         let mp3Url = querystring.unescape(req.url);
         fs.readFile(path.join(__dirname,mp3Url),(err,data)=>{
           res.setHeader('Content-Type','audio/mpeg;charset=utf8');
           res.end(data);
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