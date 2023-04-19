export default class Product {

    private _id: string;
    private _name: string;
    private _price: number;

    constructor(_id: string, _name: string, _price: number) {
        this._id = _id;
        this._name = _name;
        this._price = _price;
        this.validate();
    }

    get name() { return this._name; }
    get price() { return this._price; }

    changeName(name: string): void {
        this._name = name;
        this.validate();
    }

    changePrice(price: number): void {
        this._price = price;
        this.validate();
    }

    validate(): boolean {
        if(this._id.length === 0){
            throw new Error("Id is required");
        }

        if(this._name.length === 0){
            throw new Error("Name is required");
        }

        if(this._price < 0){
            throw new Error("Price must be greater than zero");
        }
        return true;
    }
}