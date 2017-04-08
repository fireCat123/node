'use strict'
const express = require('express');
const app = express();
//要想数据分部请求，就使用next()和all配合使用
//next()是进入下一个代码块
//next第一种方式
/*
app.all('/*',(req,res,next)=>{
    res.write("<h1>第一次响应</h1>");
    next();
},(req,res,next)=>{
    res.write("<h2>第二次响应</h2>");
    next();
},(req,res)=>{
    res.end("<h3>最后一次响应</h3>");
})*/

//next第二种方式
app.all('/*',(req,res,next)=>{
    const usename = '张三';
    if(usename == null){
        res.end('你还没有登录');
    }else{
        next();
    }
})
app.all('/student',(req,res)=>{

    res.end('登陆成功');
})
app.listen(3000);