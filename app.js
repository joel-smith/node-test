const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send("Welcome to Homepage");
});

app.listen(3000, () => {
    console.log("Dis me");
});

