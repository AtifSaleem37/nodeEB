const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Atif Saleem");
});
const port = process.env.port || 8080
app.listen(port, () => {
    console.log("Wazzappppp");
});
