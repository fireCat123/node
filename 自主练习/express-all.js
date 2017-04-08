'use strict'
const express = require('express');
const app = express();
app.all('/*',(req,res)=>{
     console.log('come here');
     res.end('status ok');
})
app.listen(3000,'127.0.0.1',(err)=>{
    if(err){
        console.log(err);
    }
    console.log('响应成功');
})