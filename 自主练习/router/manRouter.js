'use strict'
//引用模板
const express = require('express');
//创建app
const app = express();
//创建路由
const manRouter = express.Router();
manRouter.get('/ld',(req,res)=>{
    res.end('吉利来领带就是好');
})
manRouter.get('/px',(req,res)=>{
    res.end('鳄鱼皮鞋');
})
module.exports = manRouter;