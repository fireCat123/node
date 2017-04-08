'use strict'
//引用模板
const express = require('express');
//创建app
const app = express();
//创建路由
const womanRouter = express.Router();
womanRouter.get('/beg',(req,res)=>{
  res.end("LV 香奈儿 Gucci");
});

womanRouter.get('/yf',(req,res)=>{
  res.end("好看的");
});

womanRouter.get('/kh',(req,res)=>{
  res.end("迪奥，圣罗兰");
});
module.exports=womanRouter;