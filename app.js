const express = require('express');
const app = express();
const port = process.env.port || 3000;

app.get('/', (req, res) => {
    res.send("Welcome to Homepage");
});

app.listen(port, () => {
    console.log("Dis me");
});

