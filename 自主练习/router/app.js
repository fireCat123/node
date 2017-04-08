'use strict'
const express = require('express');
const path = require('path');
const manRouter = require(path.join(__dirname,'manRouter.js'));
const womanRouter = require(path.join(__dirname,'womanRouter.js'));
const app = express();
//判断路由 由那个路由文件来处理
//注意：这里只要写一级路由，如果发现路由一级是/man 这时候就交给manRouter
app.use('/woman',womanRouter);
app.use('/man',manRouter);

app.listen(3000,'127.0.0.1',(err)=>{
    if(err){
        console.log(err);
    }
    console.log('响应成功');
})