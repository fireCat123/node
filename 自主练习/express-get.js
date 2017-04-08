'use strict'
//引入模板
const express = require('express');
//创建app
const app = express();
//请求 处理 响应
app.get('/',(req,res)=>{
     console.log(req.query);
     res.end('status ok');
})
//监听
app.listen(3000,'127.0.0.1',(err)=>{
    if(err){
        console.log(err);
    }
    console.log('响应');
})