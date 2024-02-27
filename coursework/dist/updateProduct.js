"use strict";
const products = [
    {
        id: 1,
        name: "Sample Product",
        price: 49.99,
        description: "A sample product for demonstration",
    },
];
// function updateProduct(
//   productId: number,
//   updatedValues: Partial<Product>
// ): void {
//   const productIndex = products.findIndex(
//     (product) => product.id === productId
//   );
//   if (productIndex !== -1) {
//     products[productIndex] = {
//       ...products[productIndex],
//       ...updatedValues,
//     };
//   } else {
//     console.log("Product not found");
//   }
// }
function updateProduct(productId, updatedValues) {
    products.forEach((prod, index) => {
        if (prod.id === productId) {
            products[index] = Object.assign(Object.assign({}, prod), updatedValues);
        }
    });
}
updateProduct(1, {
    name: "Updated Product Name",
    price: 99.99,
});
console.log(products);
