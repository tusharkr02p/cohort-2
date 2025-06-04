const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res)=>{
    res.send("hey Tushar what r u doing..");
})

app.listen(port);

