const express = require("express");
const listNames = require('./mentionedNames.json');

const app = express();

app.get("/name-count", (req, res) => {
    res.send(listNames); //show full json object
});

app.get("/name-count/:name", (req, res) => {
    const name = req.params.name;
    let result = {}; // new empty object
    result[name] = listNames[name]; 
    // console.log(listNames[name]);
    res.send(result); //show individual key and value dependant on /name: entered
});

const PORT = process.env.PORT || 5000; //check environment variable first if not available then 5000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));