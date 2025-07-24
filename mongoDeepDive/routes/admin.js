const {Router} = require("express");
const {Admin, Courses} = require("../db");
const router = Router();
const adminMiddleware = require("../middleware/admin");

router.post("/signup", async(req,res)=>{
    const {username} = req.body;
    const {password} = req.body;
    await Admin.create({

        username,
        password
    })
    res.json({
        message: " Admin create successfully"
    })
})

router.post("/courses", adminMiddleware, async(req,res)=>{
    const {title} = req.body;
    const {description} = req.body;
    const {price} = req.body;
    const {imageLink} = req.body;

   const newCourse = await Courses.create({
    title,
    description,price,
    imageLink
    })
    res.json({
        msg:"Courses created successfully", Courses_id:newCourse
    })

})

router.get ('/courses',adminMiddleware, async(req,res)=>{
 const response  = Courses.find({})
 res.json({
    Courses:response
 })
} )

model.export = router;
