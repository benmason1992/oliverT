let fs = require("fs");

const book = () => {

    const regex = /\b(\w+)\b/g;


    fs.readFile('oliver-twist.txt', 'utf8', function (err, data) {

        // Display the file content
        let book = data;
        let lower = book.toLowerCase();
        lower.match(regex);

    });
}

module.exports = book;


