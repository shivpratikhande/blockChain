const express = require("express")
const app =  express()
const port = 5000
const cors = require("cors")

app.use(cors())
app.use(express.json())


const balances = {
    "0x1": 100,
    "0x2": 50,
    "0x3": 75,
}

app.get("/balance/:address", (req, res) => {
    const { address } = req.params;
    const balance = balances[address] || 0;

    res.send({ balance });
  });

app.post("/api/send",(req, res)=>{
    
})


app.listen(port,()=>{
    console.log("on port 5000")
})