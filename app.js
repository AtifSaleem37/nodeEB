const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Updated 1.0.0");
});

const port = process.env.port || 3000;
app.listen(port, () => {
    console.log("Wazzappppp");
});
