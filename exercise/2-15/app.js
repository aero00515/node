var fs = require('fs');
try {
    var data = fs.readFileSync('abc.txt', 'utf8');
    console.log(`data: ${data}`);
} catch (e) {
    console.error(e);
}