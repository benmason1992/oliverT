const fs = require("fs");

const regex = /\b(\w+)\b/g;


fs.readFile('first-names.txt', 'utf8', function(err, data){ 
 
    // Display the file content
    let list = data; 
    let lower = list.toLowerCase();
    let names = lower.match(regex);

    console.log(names);

}); 