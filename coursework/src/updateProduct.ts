interface Product1 {
  id: number;
  name: string;
  price: number;
  description: string;
}

const products: Product1[] = [
  {
    id: 1,
    name: "Sample Product",
    price: 49.99,
    description: "A sample product for demonstration",
  },
];

function updateProduct(
  productId: number,
  updatedValues: Partial<Product1>
): void {
  products.forEach((prod, index) => {
    if (prod.id === productId) {
      products[index] = {...prod, ...updatedValues, }
    }
  })
}

updateProduct(1, {
  name: "Updated Product Name",
  price: 99.99,
});

console.log(products);