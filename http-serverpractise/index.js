const express = require ('express')
const bodyParser = require('body-parser');

const port = 3000;

function calculateSum(n){
    let ans = 0;
    for(let i = 0 ; i < n; i++){
        ans += i;
    }
    return ans;
}

const app = express();
app.use(bodyParser.json());


app.get('/', (req,res)=>{
    const n = req.query.n;
    const ans = calculateSum(n);
    res.send("your ans is " + ans);
})

app.post('/backend', (req,res)=>{
    const message= req.query.message;
    console.log(message);
    res.json({
        output : "screen time guys"

    })
})

app.listen(port, ()=>{
    console.log(`server is start on ${port}`);
});