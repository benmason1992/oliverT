const fs = require('fs');
const readline = require('readline');
const stream = require('stream');

const getNames = async () => new Promise((resolve, reject) => { //returns a promise as result
    const instream = fs.createReadStream('first-names.txt');
    const outstream = new stream();
    const rl = readline.createInterface(instream, outstream);
    const listNames = {};

    rl.on('line', line => {
        const lower = line.toLowerCase(); //book to lower case
        listNames[lower] = 0; //give object keys a value of 0 to start with.
    });
    rl.on('error', reject); // reject if errors
    rl.on('close', () => resolve(listNames)); //resolve if succeed
});
console.log(getNames);

module.exports = getNames;