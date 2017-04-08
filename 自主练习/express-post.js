'use strict'
//引用模板
const express = require('express');
const bodyparser = require('body-parser');
//创建app
const app = express();
//用来解析浏览器传递过来的键值对的参数
app.use(bodyparser.urlencoded({ extended: false }));
//请求 处理 响应
app.post('/',(req,res)=>{
    //req.query,将传递过来的参数转为js对象
   console.log(req.body);
   res.end('status ok');
})

app.listen(3000,'127.0.0.1',(err)=>{
    if(err){
        console.log(err);
    }
    console.log('响应成功');
})