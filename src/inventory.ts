import { Product } from "./products";

interface inventoryItems {
  product: Product;
  quantity: number;
}

const inventory: inventoryItems[] = [
  { product: { name: "motor", price: 10.0 }, quantity: 10 },
  { product: { name: "sensor", price: 12.5 }, quantity: 4 },
  { product: { name: "LED", price: 1.0 }, quantity: 20 },
];

export function calcInventoryValue(items: inventoryItems[]): number {
  let sum = 0;
  if (items.length === 0) {
    return 0;
  }
  for (let i of items) {
    sum += i.product.price * i.quantity;
  }
  return sum;
}
