import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Order {
    id: bigint;
    customerName: string;
    customerPhone: string;
    createdAt: bigint;
    items: Array<OrderItem>;
    totalPrice: number;
    customerEmail: string;
}
export interface OrderItem {
    productName: string;
    quantity: bigint;
    unitPrice: number;
}
export interface backendInterface {
    getOrderById(id: bigint): Promise<Order | null>;
    getOrders(): Promise<Array<Order>>;
    placeOrder(customerName: string, customerEmail: string, customerPhone: string, items: Array<OrderItem>): Promise<bigint>;
}
