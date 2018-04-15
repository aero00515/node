/*jslint node: true */
function run(a, b, callback) {
    'use strict';
    console.log("please wait...");
    setTimeout(function () {
        callback(a + b);
    }, 1000);
}
run(5, 10, function (answer) {
    'use strict';
    console.log("answer:" + answer);
});