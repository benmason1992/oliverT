const fs = require('fs');
const { getBookContent } = require('./book.js');
const { getNames } = require('./names.js');

(async () => {
    const names = await getNames(); // iife wait for promise for names
    const words = await getBookContent(); // iife wait for promise for book

    const result = words.reduce((map, word) => {
        if (typeof map[word] !== "undefined") map[word] += 1; //if name is not undefined and appears in words +1 to key value.
        return map;
    }, names);
    // console.log(result);

    const entries = Object.entries(result); //convert object to array for manipulation.
    // console.log(entries)

    const skim = entries.filter(f => f[1] != 0).sort((a, b) => b[1] - a[1]); //filter array to remove no mentions, then sort from highest to lowest.
    // console.log(skim);

    const obj = Object.assign(...skim.map(([key, val]) => ({ [key]: val }))); //convert array back to object
    // console.log(obj)

    const stringify = JSON.stringify(obj, null, 1);
    // console.log(stringify);
    fs.writeFileSync("mentionedNames.txt", stringify);

})();