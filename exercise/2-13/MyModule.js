function MyModule() {
    // this => new Object
}

MyModule.prototype.version = '1.0.5';
MyModule.prototype.setName = (value) => {
    this._name = value;
}
MyModule.prototype.getName = (value) => {
    return this._name;
}
module.exports = MyModule;