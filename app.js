const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Updated 1.0.0");
});

app.listen(3000, () => {
    console.log("Wazzappppp");
});
