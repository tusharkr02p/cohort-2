require('dotenv').config();
const mongoose = require ("mangoose");
const mongoURI = process.env.MONGO_URI;

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.error('MongoDB connection error:', err));


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