type Product = {
  name: string;
  price: number;
};

type Shipping = {
  weight: number;
  shippingCost: number;
};

// type ShippableProduct = Product & Shipping;

interface ShippableProduct extends Shipping, Product {};

const item: ShippableProduct = {
  name: "Table",
  price: 100,
  weight: 20,
  shippingCost: 30,
};