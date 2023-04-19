import Address from "./address";
import Customer from "./customer";

describe("Customer unit testes", () =>{

    it("should throw error when id is empty", () => {
       expect(() =>{
        let customer = new Customer("", "Michel");
       }).toThrowError("Id is required");
    });

    it("should throw error when name is empty", () => {
        expect(() =>{
         let customer = new Customer("1", "");
        }).toThrowError("Name is required");
     });

     it("should change name", () => {
        const customer = new Customer("123","Michel");
        customer.changeName("Junior")
        expect(customer.name).toBe("Junior");
     });
 
     it("should activate customer", () => {
        const customer = new Customer("1","Michel");
        const address = new Address("Street Address", 1, "063223-323", "São Paulo");
        customer.Address = address;

        customer.activate();

        expect(customer.isActive()).toBe(true);
     });

     it("should throw error when address is undefined when you activate a customer", () => {
        expect(() =>{
            const customer = new Customer("1","Michel");  
            customer.activate();
        }).toThrowError("Address is mandatory to activate a customer");      
     });

     it("should desactivate customer", () => {
        const customer = new Customer("1","Michel");
       
        customer.desactivate();

        expect(customer.isActive()).toBe(false);
     });
})