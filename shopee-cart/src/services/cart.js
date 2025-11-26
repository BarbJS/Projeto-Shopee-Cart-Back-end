//CASOS DE USO

async function addItem(userCart, item) {
   userCart.push(item);
}

async function deleteItem(userCart, name) {
   const index = userCart.findIndex(item => item.name === name); 
    if (index !== -1) {
        userCart.splice(index, 1);
}}

async function removeItem(userCart, index, item) {
   const indexFound = userCart.findIndex((item, idx) => idx === index);
   if (indexFound === -1) {
    console.log("Item not found in the cart.");
    return;
   } 
   if (userCart[indexFound].quantity > 1) {
    userCart[indexFound].quantity -= 1;
    return;
   }
   else if (userCart[indexFound].quantity === 1) {
        userCart.splice(indexFound, 1);
    return;
   }
   if (index >= 0 && index < userCart.length) {   
        userCart.splice(index, 1);
    return;
   }

}

async function calculateTotal(userCart) {
   console.log("\nShopee cart total:");
   const result = userCart.reduce((total, item) => total + item.subtotal (), 0); 
   console.log(`R$${result.toFixed(2)}`);
   }

async function displayCart(userCart) {
   console.log("\nShopee cart list:");
   userCart.forEach((item, index) => {    
    console.log(`${index + 1}. ${item.name} - R$${item.price} x ${item.quantity} = R$${item.subtotal()}`);
})
}

export { addItem, deleteItem, removeItem, calculateTotal, displayCart }
