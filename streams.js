const fs = require('fs');

const readStream = fs.createReadStream('./docs/blog1.txt', { encoding : 'utf8'});
const writeStream = fs.createWriteStream('./docs/blog2.txt');

readStream.on('data', (thing) => {
    console.log('----------------------------------------------------------------');
    console.log(thing);
    writeStream.write("Strenger_things");
})