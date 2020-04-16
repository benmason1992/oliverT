const fs = require('fs');
const { getBookContent } = require('./book.js');
const { getNames } = require('./names.js');

(async () => { // iife is immediately invoked
    const names = await getNames(); //pauses and awaits the getNames() held in names.js
    const words = await getBookContent(); //pauses and awaits the getBookContent() held in book.js

    const result = words.reduce((map, word) => {
        if (typeof map[word] !== 'undefined') map[word] += 1; //if name is not undefined and appears in words +1 to key value.
        return map;
    }, names);
    // console.log(result);

    const entries = Object.entries(result); //convert object to array for manipulation.
    // console.log(entries)

    const skim = entries.filter(f => f[1] != 0).sort((a, b) => b[1] - a[1]); //filter array to remove no mentions, then sort from highest to lowest.
    // console.log(skim);

    const obj = Object.assign(...skim.map(([key, val]) => ({ [key]: val }))); //convert array back to object
    // console.log(obj)

    const stringify = JSON.stringify(obj, null, 1); // stringify before adding writing to .json file.
    // console.log(stringify);
    fs.writeFileSync('mentionedNames.json', stringify);
})();