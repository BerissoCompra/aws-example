const express = require("express");

const app = express();
app.get('/', (req, res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.send('Hello word con express')
})

app.listen(3000);
console.log("Server on port 3000")