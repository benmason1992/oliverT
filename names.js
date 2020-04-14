const fs = require("fs");
const readline = require('readline');
const stream = require('stream');


const names = () => {
    const instream = fs.createReadStream('first-names.txt');
    const outstream = new stream;
    const rl = readline.createInterface(instream, outstream);

    const listNames = {};


    rl.on('line', function (line) {
        // process line here
        //To do - what happens if the line is blank, what happens if there is a null value.
        let lower = line.toLowerCase();
        listNames[lower] = 0; 
    });

    rl.on('close', function () {
        // do something on finish here

        console.log('listNames', listNames);
    });
}

return names();