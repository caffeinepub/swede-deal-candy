export interface OrderItem {
  productName: string;
  quantity: number;
  unitPrice: number;
}

export interface Order {
  id: bigint;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  items: OrderItem[];
  totalPrice: number;
  createdAt: bigint;
}

export interface CartItem {
  productName: string;
  unitPrice: number;
  quantity: number;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  emoji: string;
}
