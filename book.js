const fs = require('fs');
const fsp = fs.promises; // return Promise objects rather than using callbacks

const getBookContent = async () => new Promise(async (resolve, reject) => {
    try {
        const regex = /\b(\w+)\b/g;
        const book = await fsp.readFile('oliver-twist.txt', 'utf8')
        const lower = book.toLowerCase(); //names to lower case
        return resolve(lower.match(regex)); //if it succeed's
    } catch (error) {
        return reject(error); //if it fails
    }
});

module.exports = getBookContent;

