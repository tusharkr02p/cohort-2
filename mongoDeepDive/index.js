const express = require("express");
const bodyParser = require("body-parser")
const app = express();
const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user")


app.use(bodyParser.json());
app.use("/admin", adminRouter)
app.use("/user", userRouter)

const PORT = 8000;
app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`);
})
