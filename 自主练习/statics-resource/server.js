'use strict'
const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const xtpl = require('xtpl');

const datas = require(path.join(__dirname,'datas.json'));
//处理静态资源 
//statics 表示根目录，此时页面中引用的文件路径就不用写statics了
app.use(express.static('statics'));
//使用all处理get和post请求的参数
app.all('/*',(req,res)=>{
    //使用xtpl模板替换页面中的占位符
      xtpl.renderFile(path.join(__dirname,'index.html'),{
            array:datas
          },function(error,content){
              res.setHeader("Content-Type","text/html;charset=utf-8");
              res.end(content);
          });
    //  if(req.url.includes('index.html') || req.url=='/'){
    //       xtpl.renderFile(path.join(__dirname,'index.html'),{
    //         array:datas
    //       },function(error,content){
    //           res.setHeader("Content-Type","text/html;charset=utf-8");
    //           res.end(content);
    //       });
    //  }else if(req.url.includes('site.css')){
    //      fs.readFile(path.join(__dirname,'statics/css/site.css'),(err,data)=>{
    //          res.setHeader("Content-Type","text/css;charset=utf-8");
    //          res.end(data);
    //      })
    //  }
})
app.listen(3000,'127.0.0.1',(err)=>{
    if(err){
        console.log(err);
    }
    console.log('响应成功');
})