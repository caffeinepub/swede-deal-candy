import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { useGetOrders } from "@/hooks/useBackend";
import type { Order } from "@/types";
import {
  Clock,
  Hash,
  LayoutDashboard,
  Mail,
  Package,
  Phone,
  RefreshCw,
  ShoppingBag,
  User,
} from "lucide-react";
import { motion } from "motion/react";

function formatDate(ts: bigint): string {
  const ms = Number(ts / BigInt(1_000_000));
  const date = new Date(ms);
  const datePart = date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  const timePart = date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
  return `${datePart} at ${timePart}`;
}

function formatUSD(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
}

function OrderCard({ order, index }: { order: Order; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
    >
      <Card
        className="shadow-card border-border overflow-hidden"
        data-ocid={`order-card-${order.id}`}
      >
        {/* Card top accent strip */}
        <div className="h-1 bg-gradient-to-r from-primary via-secondary to-accent" />

        <CardHeader className="pb-3 pt-4">
          <div className="flex items-start justify-between gap-3 flex-wrap">
            {/* Customer info */}
            <div className="min-w-0">
              <CardTitle className="font-display text-base flex items-center gap-2 flex-wrap">
                <User size={15} className="text-primary shrink-0" />
                <span className="truncate">{order.customerName}</span>
              </CardTitle>
              <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1.5">
                <span className="text-xs text-muted-foreground flex items-center gap-1 min-w-0">
                  <Mail size={11} className="shrink-0" />
                  <span className="truncate">{order.customerEmail}</span>
                </span>
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                  <Phone size={11} className="shrink-0" />
                  {order.customerPhone}
                </span>
              </div>
            </div>

            {/* Order meta */}
            <div className="text-right shrink-0">
              <p className="font-display font-black text-xl text-primary">
                {formatUSD(order.totalPrice)}
              </p>
              <span className="text-xs text-muted-foreground flex items-center gap-1 justify-end mt-0.5">
                <Clock size={10} />
                {formatDate(order.createdAt)}
              </span>
              <Badge
                variant="outline"
                className="text-xs mt-1 gap-1 border-primary/30 text-primary/70"
              >
                <Hash size={9} />
                Order #{order.id.toString()}
              </Badge>
            </div>
          </div>
        </CardHeader>

        <Separator />

        <CardContent className="pt-3 pb-4">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2.5 flex items-center gap-1">
            <Package size={11} />
            Items Ordered
          </p>
          <div className="space-y-2">
            {order.items.map((item) => (
              <div
                key={`${item.productName}-${item.unitPrice}`}
                className="flex justify-between items-center text-sm bg-muted/30 rounded-lg px-3 py-1.5"
              >
                <span className="flex items-center gap-2 text-foreground min-w-0">
                  <span className="truncate">{item.productName}</span>
                  <Badge
                    variant="secondary"
                    className="text-xs px-1.5 py-0 h-4 shrink-0 bg-primary/10 text-primary border-0"
                  >
                    ×{item.quantity}
                  </Badge>
                </span>
                <span className="text-muted-foreground text-xs font-medium shrink-0 ml-2">
                  {formatUSD(item.unitPrice * item.quantity)}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

function OrderSkeleton() {
  return (
    <Card className="overflow-hidden border-border">
      <div className="h-1 bg-muted/50" />
      <CardHeader className="pb-3 pt-4">
        <div className="flex justify-between gap-3">
          <div className="space-y-2 flex-1">
            <Skeleton className="h-4 w-36" />
            <Skeleton className="h-3 w-52" />
          </div>
          <div className="space-y-1.5 text-right">
            <Skeleton className="h-6 w-16 ml-auto" />
            <Skeleton className="h-3 w-28 ml-auto" />
          </div>
        </div>
      </CardHeader>
      <Separator />
      <CardContent className="pt-3 pb-4 space-y-2">
        <Skeleton className="h-3 w-20" />
        {[1, 2].map((i) => (
          <Skeleton key={i} className="h-8 rounded-lg" />
        ))}
      </CardContent>
    </Card>
  );
}

export default function AdminPage() {
  const { data: orders, isLoading, refetch, isFetching } = useGetOrders();

  // Sort newest first
  const sortedOrders = orders
    ? [...orders].sort((a, b) => {
        const diff = b.createdAt - a.createdAt;
        return diff > 0n ? 1 : diff < 0n ? -1 : 0;
      })
    : [];

  const totalRevenue = sortedOrders.reduce((sum, o) => sum + o.totalPrice, 0);
  const totalOrders = sortedOrders.length;

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 flex items-start justify-between gap-4 flex-wrap"
        >
          <div>
            <h1 className="font-display font-black text-3xl text-foreground flex items-center gap-2.5 mb-1">
              <LayoutDashboard className="text-primary" size={28} />
              Orders Dashboard
            </h1>
            <p className="text-muted-foreground text-sm">
              Sweet Deal Candy — all incoming orders in one place.
            </p>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => refetch()}
            disabled={isFetching}
            data-ocid="refresh-orders"
            className="gap-2 border-primary/30 text-primary hover:bg-primary/5 transition-smooth"
          >
            <RefreshCw size={14} className={isFetching ? "animate-spin" : ""} />
            {isFetching ? "Refreshing…" : "Refresh"}
          </Button>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="grid grid-cols-2 gap-4 mb-8"
        >
          <Card
            className="candy-gradient border-primary/20 shadow-subtle"
            data-ocid="stat-total-orders"
          >
            <CardContent className="p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <ShoppingBag size={18} className="text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wide font-semibold">
                  Total Orders
                </p>
                <p className="font-display font-black text-2xl text-primary">
                  {isLoading ? "—" : totalOrders}
                </p>
              </div>
            </CardContent>
          </Card>

          <Card
            className="border-accent/20 shadow-subtle"
            style={{ background: "oklch(0.7 0.15 125 / 0.06)" }}
            data-ocid="stat-total-revenue"
          >
            <CardContent className="p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                <span className="text-accent font-black text-base font-display">
                  $
                </span>
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wide font-semibold">
                  Total Revenue
                </p>
                <p className="font-display font-black text-2xl text-accent">
                  {isLoading ? "—" : formatUSD(totalRevenue)}
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Section heading */}
        {!isLoading && totalOrders > 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-sm font-semibold text-muted-foreground mb-4 flex items-center gap-2"
          >
            <span className="h-px flex-1 bg-border" />
            {totalOrders} {totalOrders === 1 ? "order" : "orders"} — newest
            first
            <span className="h-px flex-1 bg-border" />
          </motion.p>
        )}

        {/* Orders list */}
        {isLoading ? (
          <div className="space-y-4" data-ocid="orders-loading">
            {[1, 2, 3].map((i) => (
              <OrderSkeleton key={i} />
            ))}
          </div>
        ) : sortedOrders.length > 0 ? (
          <div className="space-y-4" data-ocid="orders-list">
            {sortedOrders.map((order, i) => (
              <OrderCard key={order.id.toString()} order={order} index={i} />
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="text-center py-20 bg-muted/30 rounded-2xl border border-border"
            data-ocid="orders-empty"
          >
            <p className="text-6xl mb-4">🍬</p>
            <h3 className="font-display font-bold text-xl text-foreground mb-2">
              No orders yet!
            </h3>
            <p className="text-muted-foreground text-sm max-w-xs mx-auto">
              No orders yet — share your shop link to start receiving orders!
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
