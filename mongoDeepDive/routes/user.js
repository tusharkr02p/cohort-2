const {Router} = require("express");
const {User,Courses} = require("../db");
const router = Router();
const userMiddleware = require("../middleware/user");

router.post("/signup", async(req,res)=>{
    const{username} = req.body;
    const {password} = req.body;

    await User.create({
        username,password

    })
    res.json({
        msg: "user create successfully"
    })
})

router.get("/courses",  async(req,res)=>{
    const response = await Courses.find({})
    res.json({
     Courses: response
    })
})

router.post("/courses/coursesId", userMiddleware, async(req,res)=>{
    const{username} = req.headers;
    const{courseId} = req.params;
         await User.updateOne({
        username
    },{
        "$push":{
            puchasedCourses: courseId
        }
    })
    res.json({
        msg:"purchase complete successfully"
    })
})

router.get("/purchasedCourse", userMiddleware, async(req,res)=>{
    const user = await User.findOne({
        username: req.headers.username
    })
    const courses = await Courses.find({
        _id: {
            "$in": user.purchasedCourses
        }
    })
    res.json({
        Courses:courses
    })
})

model.export= router