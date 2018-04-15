/*jslint es6 */
var argv = process.argv.slice(2);

console.log(argv.map((arg) => {
    return process.env[arg];
}));