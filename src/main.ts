import Address from "./entity/address";
import Customer from "./entity/customer";
import Order from "./entity/order";
import OrderItem from "./entity/order_item";


let customer = new Customer("123","Michel Junior");
const address = new Address("Estrada das Pitas", 213, "06499-323", "São Paulo");

customer.Address = address;
customer.activate();

const item1 = new OrderItem("1","Item 1", 10, "p1", 1);
const item2 = new OrderItem("2","Item 2", 14, "p2", 2);
const order = new Order("1", "123", [item1, item2]);