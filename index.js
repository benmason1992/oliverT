const express = require("express");
const listNames = require('./mentionedNames.json');


const app = express();

app.get("/", (req, res) => {
    res.send("Hello World")
});

app.get("/name-count", (req, res) => {
    res.send(listNames);
});

app.get("/name-count/:name", (req, res) => {
    const name = req.params.name;
    let result = {};
    result[name] = listNames[name];
    // console.log(listNames[name]);
    res.send(result);
});

const PORT = process.env.PORT || 5000; //check enviroment variable first if not available then 5000


app.listen(PORT, () => console.log(`Server started on port ${PORT}`));