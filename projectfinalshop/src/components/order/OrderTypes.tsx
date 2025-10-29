export type CartItem = {
  id: string;
  name: string;
  variant: string;
  price: number;
  qty: number;
  image: string;
};

export type Shipping = "standard" | "express";
export type Payment  = "bank" | "card" | "cod";
