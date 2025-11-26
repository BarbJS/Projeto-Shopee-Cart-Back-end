import * as cartService from "./services/cart.js";
import createItem from "./services/item.js"; 

const userCart = [];
const myWishlist = [];

console.log("Welcome to the Shopping Cart System!");

const item1 = await createItem("Laptop", 1199.99, 1);
const item2 = await createItem("Mouse", 25.50, 2);

//Adição de 2 itens no carrinho
await cartService.addItem(userCart, item1);
await cartService.addItem(userCart, item2);

//await cartService.removeItem(userCart, 0);

await cartService.displayCart(userCart);
//Deleção de 2 itens do carrinho
//await cartService.deleteItem(userCart, item1.name);
//await cartService.deleteItem(userCart, item2.name);   



await cartService.calculateTotal(userCart);

