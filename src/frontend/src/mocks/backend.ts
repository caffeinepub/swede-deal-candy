import type { backendInterface } from "../backend";

export const mockBackend: backendInterface = {
  getOrderById: async (id: bigint) => ({
    id,
    customerName: "Jane Smith",
    customerEmail: "jane@example.com",
    customerPhone: "555-0100",
    createdAt: BigInt(Date.now()),
    items: [
      { productName: "Ring pop", quantity: BigInt(2), unitPrice: 8.34 },
      { productName: "KitKat bear", quantity: BigInt(1), unitPrice: 11.50 },
    ],
    totalPrice: 28.18,
  }),
  getOrders: async () => [
    {
      id: BigInt(1),
      customerName: "Jane Smith",
      customerEmail: "jane@example.com",
      customerPhone: "555-0100",
      createdAt: BigInt(Date.now() - 3600000),
      items: [
        { productName: "Ring pop", quantity: BigInt(2), unitPrice: 8.34 },
        { productName: "KitKat bear", quantity: BigInt(1), unitPrice: 11.50 },
      ],
      totalPrice: 28.18,
    },
    {
      id: BigInt(2),
      customerName: "Tom Baker",
      customerEmail: "tom@example.com",
      customerPhone: "555-0200",
      createdAt: BigInt(Date.now() - 7200000),
      items: [
        { productName: "Skittle heart", quantity: BigInt(3), unitPrice: 2.00 },
        { productName: "Gummy pizza", quantity: BigInt(5), unitPrice: 0.50 },
      ],
      totalPrice: 8.50,
    },
  ],
  placeOrder: async () => BigInt(3),
};
