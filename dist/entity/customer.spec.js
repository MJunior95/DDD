"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const address_1 = __importDefault(require("./address"));
const customer_1 = __importDefault(require("./customer"));
describe("Customer unit testes", () => {
    it("should throw error when id is empty", () => {
        expect(() => {
            let customer = new customer_1.default("", "Michel");
        }).toThrowError("Id is required");
    });
    it("should throw error when name is empty", () => {
        expect(() => {
            let customer = new customer_1.default("1", "");
        }).toThrowError("Name is required");
    });
    it("should change name", () => {
        const customer = new customer_1.default("123", "Michel");
        customer.changeName("Junior");
        expect(customer.name).toBe("Junior");
    });
    it("should activate customer", () => {
        const customer = new customer_1.default("1", "Michel");
        const address = new address_1.default("Street Address", 1, "063223-323", "São Paulo");
        customer.Address = address;
        customer.activate();
        expect(customer.isActive()).toBe(true);
    });
    it("should throw error when address is undefined when you activate a customer", () => {
        expect(() => {
            const customer = new customer_1.default("1", "Michel");
            customer.activate();
        }).toThrowError("Address is mandatory to activate a customer");
    });
    it("should desactivate customer", () => {
        const customer = new customer_1.default("1", "Michel");
        customer.desactivate();
        expect(customer.isActive()).toBe(false);
    });
});
