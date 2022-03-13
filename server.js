const express = require('express');
const app = express();
const port = 4000;

app.use((req,res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
})


app.get('/revenue', (req, res) => {
    return res.send([
        {
            "title": "Total Revinue",
            "amount": Math.floor(Math.random() * (10000.00 - 3000.00 + 1)) + 3000.00
        },
        {
            "title": "Flipkart",
            "amount": Math.floor(Math.random() * (10000.00 - 3000.00 + 1)) + 3000.00
        },
        {
            "title": "Amazon",
            "amount": Math.floor(Math.random() * (10000.00 - 3000.00 + 1)) + 3000.00
        },
        {
            "title": "Ebay",
            "amount": Math.floor(Math.random() * (10000.00 - 3000.00 + 1)) + 3000.00
        }
    ]);
});

app.get('/progress', (req, res) => {
    return res.send([
        {
            "title": "Purchase Rate",
            "amount": Math.floor(Math.random() * (100 - 1 + 1)) + 1
        },
        {
            "title": "Checkout Rate",
            "amount": Math.floor(Math.random() * (100 - 1 + 1)) + 1
        },
        {
            "title": "Sale Rate",
            "amount": Math.floor(Math.random() * (100 - 1 + 1)) + 1
        },
        {
            "title": "Abandoned Cart Rate",
            "amount": Math.floor(Math.random() * (100 - 1 + 1)) + 1
        }
    ]);
});



app.listen(port, () =>
    console.log(`Example app listening on port ${port}!`),
);