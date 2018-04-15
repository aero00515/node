var MyModule = require('./MyModule');
var myModule = new MyModule();
var hisModule = new MyModule();
console.log(myModule.version);
myModule.setName('Andy');
console.log(myModule.getName());
hisModule.setName('Alan');
console.log(hisModule.getName());
