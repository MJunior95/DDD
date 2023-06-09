"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = __importDefault(require("./product"));
describe("Product unit tests", () => {
    it("should throw error when id is empty", () => {
        expect(() => {
            const product = new product_1.default("", "Product1", 100);
        }).toThrowError("Id is required");
    });
    it("should throw error when name is empty", () => {
        expect(() => {
            const product = new product_1.default("123", "", 100);
        }).toThrowError("Name is required");
    });
    it("should throw error when price is less than zero", () => {
        expect(() => {
            const product = new product_1.default("123", "Michel", -1);
        }).toThrowError("Price must be greater than zero");
    });
    it("should change name", () => {
        const product = new product_1.default("123", "PS4", 100);
        product.changeName("PS5");
        expect(product.name).toBe("PS5");
    });
    it("should change price", () => {
        const product = new product_1.default("123", "PS4", 100);
        product.changePrice(150);
        expect(product.price).toBe(150);
    });
});
