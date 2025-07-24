const mongoose = require ("mangoose");
mongoose.connect('mongodb+srv://tushar02p:TJJYdYv8wlbB0rIJ@cluster0.at122yl.mongodb.net/course_app');

const AdminSchema = new mongoose.Schema({
    username: String,
    password: String
})

const UserSchema= new mongoose.Schema({
    username: String,
    password: String,
    purchasedCourses : [{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Courses'

    }]
})

const CourseSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    imageLink:String


})

const Admin = momngoose.model('Admin', AdminSchema);
const User = momngoose.model('User', UserSchema);
const Courses = momngoose.model('Courses', CourseSchema);

model.export = {
    Admin,
    User,
    Courses
}