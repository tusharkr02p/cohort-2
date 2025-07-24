const { User } = require("../db");

function userMiddleware(req,res,next){
    const {username} = req.headers;
    const {password} = req.headers;

    User.findOne({
        username, password
        
    }).then((value)=>{
        if(value){
            next()
        }else{
            res.status(403).json({
                msg: "User doesnot exists"
            })
        }
    })
}
model.export = userMiddleware;