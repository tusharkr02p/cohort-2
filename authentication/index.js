/* lets start by creating our  assignment for today 
        A website which has 2 end point

    1-> post /signin

    Body-{
    username:string
    password:string
    }

    Return a json webtoken with username encrypted

    2-> Get/users
        Headers- authorization header
    
    Return an array of all users if user is signed in(token is correct)
    return 403 status code if not
*/

const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "7632";

const app = express();
 app.use(express.json());

const ALL_USERS = [
  {
    username: "tusharraj3531@gmail.com",
    password: "456",
    name: "Tushar kumar",
  },
  {
    username: "prince3531@gmail.com",
    password: "789",
    name: "Prince kumar",
  },
  {
    username: "pritam456@gmail.com",
    password: "125",
    name: "Pritam kumar",
  },
];

function userExist(username, password) {
  let userExist = false;
  for (let i = 0; i < ALL_USERS.length; i++) {
    if (
      ALL_USERS[i].username == username &&
      ALL_USERS[i].password == password
    ) {
      return (userExist = true);
    }
  }
  return userExist;
}
app.post("/signin", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExist(username, password)) {
    return res.status(403).json({
      msg: "user doen't exist in our memory database",
    });
  }

  var token = jwt.sign({ username: username }, jwtPassword);
  return res.json({
    token,
  });
});

app.get('/users', (req , res) =>{
    // const username = req.body.username;
    
const token  = req.headers.authorization;
try {
    const decoded = jwt.verify(token , jwtPassword);
    const username = decoded.username;
    res.json({
        users: ALL_USERS.filter((value)=>{
            if(value.username == username){
                return false;
            }else{
                return true;
            }
        })
    })
    } catch (err){
        return res.status(403).json({
            msg: "Invalid token"
        })
    }
    // res.json({
    //     users: ALL_USERS.filter((value)=>{
    //         if(value.username == username){
    //             return false;
    //         }else{

    //             return true;

    //         }
            
    //     })
    // })
})

app.listen(2005);