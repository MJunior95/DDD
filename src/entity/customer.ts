class Customer{

    _id: string;
    _name: string;
    _address: string;

    constructor(id:string, name:string, address:string) {
        this._id = id;
        this._name = name;
        this._address = address;
    }

    getId() {
        return this._id;
    }
    getName() {
        return this._name;
    }
    getAddress() {
        return this._address;
    }
    setAddress(address:string) {
        this._address = address;
    }
    setID(id:string) {
        this._id = id;
    }
    setName(name:string) {
        this._name = name;
    }
}