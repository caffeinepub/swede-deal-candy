import { createActor } from "@/backend";
import type { OrderItem as BackendOrderItem } from "@/backend";
import type { Order, OrderItem } from "@/types";
import { useActor } from "@caffeineai/core-infrastructure";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

function toOrderItem(raw: BackendOrderItem): OrderItem {
  return {
    productName: raw.productName,
    quantity: Number(raw.quantity),
    unitPrice: raw.unitPrice,
  };
}

function toOrder(raw: {
  id: bigint;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  items: BackendOrderItem[];
  totalPrice: number;
  createdAt: bigint;
}): Order {
  return {
    id: raw.id,
    customerName: raw.customerName,
    customerEmail: raw.customerEmail,
    customerPhone: raw.customerPhone,
    items: raw.items.map(toOrderItem),
    totalPrice: raw.totalPrice,
    createdAt: raw.createdAt,
  };
}

export function useGetOrders() {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<Order[]>({
    queryKey: ["orders"],
    queryFn: async () => {
      if (!actor) return [];
      const raw = await actor.getOrders();
      return raw.map(toOrder);
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetOrderById(id: bigint | null) {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<Order | null>({
    queryKey: ["order", id?.toString()],
    queryFn: async () => {
      if (!actor || id === null) return null;
      const raw = await actor.getOrderById(id);
      if (!raw) return null;
      return toOrder(raw);
    },
    enabled: !!actor && !isFetching && id !== null,
  });
}

export interface PlaceOrderParams {
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  items: OrderItem[];
}

export function usePlaceOrder() {
  const { actor } = useActor(createActor);
  const queryClient = useQueryClient();

  return useMutation<bigint, Error, PlaceOrderParams>({
    mutationFn: async ({
      customerName,
      customerEmail,
      customerPhone,
      items,
    }) => {
      if (!actor) throw new Error("Actor not available");
      const backendItems: BackendOrderItem[] = items.map((item) => ({
        productName: item.productName,
        quantity: BigInt(item.quantity),
        unitPrice: item.unitPrice,
      }));
      return actor.placeOrder(
        customerName,
        customerEmail,
        customerPhone,
        backendItems,
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["orders"] });
    },
  });
}
