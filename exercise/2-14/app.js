var fs = require('fs');
fs.readFile('abc.txt', 'utf8', (err, data) => {
    if (!err) {
        console.log(`data: ${data}`);
    } else {
        console.error(err);
    }
});