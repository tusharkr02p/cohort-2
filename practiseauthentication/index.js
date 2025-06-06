const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123abc4";
const app = express();
app.use(express.json());

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (username == "admin" && password == "123") {
    const token = jwt.sign({ username }, jwtPassword);
    return res.json({ username, token, msg: "login success" });
  }
  return res.json({ msg: "no token" });
});

const verifyTokenMiddleware = (req, res, next) => {
  const token = req.body.token;
  if (!token) {
    return res.status(411).json({
      msg: "token invalid",
    });
  }
  try {
    const decoded = jwt.verify(token, jwtPassword);
    req.user = decoded;
  } catch (err) {
    return res.status(411).json({
      msg: "invalid token",
    });
  }
  next();
};

app.get("/home", verifyTokenMiddleware, (req, res) => {
  const user = req.user;
  res.json({ msg: `welcome ${user.username}` });
});

app.listen(8000);

// const token = jwt.sign({
//     id:1,
//     username:"GFG"
// }, jwtPassword,{expiresIn: '1h'});

// console.log(token);

// // we can also write this way
// // jwt.verify(token, 'abcde12345', (err, decoded) => {
// //     if (err) {
// //       console.log('Token is invalid');
// //     } else {
// //       console.log('Decoded Token:', decoded);
// //     }
// //   });

// try{
//     const decoded = jwt.verify(token , jwtPassword);
//     console.log("decoded token" , decoded)
// }catch(err){

// }
