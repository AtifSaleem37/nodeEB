const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Atif Saleem");
});

app.listen(8080, () => {
    console.log("Wazzappppp");
});
