const {Admin}  = require("../db");

function adminMiddleware(req,res,next){
    const {username} = req.headers;
    const {password} = req.headers;
Admin.findOne({
    username,password
})
.then((value)=>{
    if(value){
        next()
    }else{
        res.status(403).json({
            msg:"Admin doesn't exists"
        })
    }
})

}
model.export = adminMiddleware