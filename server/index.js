const express = require("express")
const app = express()
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


function setInitialBalance(address) {
    if (!balances[address]) {
        balances[address] = 0
    }
}


app.post("/api/send", (req, res) => {
    const { sender, reciver, amount } = req.body

    setInitialBalance(reciver) 
    setInitialBalance(sender) 

    if (balances[sender] < amount) {
/*         alert("insufficient balance")
 */        res.status(400).send({ balance: "not enough funds" })
    }
    else {
        balances[sender] -= amount
        balances[reciver] += amount
        console.log(balances)
        res.send({ balances: balances[sender] })
    }

})


app.listen(port, () => {
    console.log("on port 5000")
})