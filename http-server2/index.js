const express = require('express');
const app = express();
require('dotenv').config()
const port  = process.env.PORT || 2000;
console.log(process.env.PORT)

const bodyParser = require('body-parser');

app.use(bodyParser.json());

// app.post('/', (req,res)=>{
//     console.log(req.body);
//     res.send("Hello beast")
// })

app.post('/backend/conversation', (req, res)=>{
    const message = req.queryṇ.message;
    console.log(message);
    res.json({
        output: "what is 2 and 2"
    })
    
})

// app.get("/tushardetail", (req, res)=>{
   
//     //  res.json({
//     //     "name": "tushar",
//     //     "age":"18"
//     // })
//     res.send('<b> hey buddy what are u doing <b>');
// })


app.listen(port,()=>{
    console.log(`work is done ${port}`)
})