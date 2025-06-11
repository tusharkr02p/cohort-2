const express = require('express');

const app = express();
app.use(express.json());


function isOldEnoughMiddleWare(req, res, next){
    const age = req.query.age;
    if(age>=18){
        next();
    }else{
        res.status(411).json({
            msg: "sorry your are not of age yet"
        })
    }

}


app.get('/ride', isOldEnoughMiddleWare, (req,res)=>{
    res.json({
        msg:"you have successfully riden the ride 1"
    })
})


app.listen(2144);


