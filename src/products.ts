export interface Product {
  name: string;
  price: number;
}

const products: Product[] = [
  { name: "toothpaste", price: 3.0 },
  { name: "toothbrush", price: 1.5 },
  { name: "mouthwash", price: 5.99 },
];

export function calcAverageProductPrice(products: Product[]): number {
  //   let productItems: Product = products[0];
  let sum = 0;
  if (products.length === 0) {
    return 0;
  }

  for (let i of products) {
    sum += i.price;
  }
  return sum / products.length;
}
