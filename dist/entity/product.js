"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Product {
    constructor(_id, _name, _price) {
        this._id = _id;
        this._name = _name;
        this._price = _price;
        this.validate();
    }
    get name() { return this._name; }
    get price() { return this._price; }
    changeName(name) {
        this._name = name;
        this.validate();
    }
    changePrice(price) {
        this._price = price;
        this.validate();
    }
    validate() {
        if (this._id.length === 0) {
            throw new Error("Id is required");
        }
        if (this._name.length === 0) {
            throw new Error("Name is required");
        }
        if (this._price < 0) {
            throw new Error("Price must be greater than zero");
        }
        return true;
    }
}
exports.default = Product;
