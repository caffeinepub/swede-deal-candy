import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/context/CartContext";
import { usePlaceOrder } from "@/hooks/useBackend";
import type { Product } from "@/types";
import {
  CheckCircle2,
  Minus,
  Plus,
  ShoppingCart,
  Sparkles,
  Trash2,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";

const PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Snoopy Hershey Kisses",
    price: 1.5,
    category: "Chocolate",
    emoji: "🍫",
  },
  {
    id: "2",
    name: "Joyride Gummy Busters",
    price: 3.55,
    category: "Gummy",
    emoji: "🐛",
  },
  {
    id: "3",
    name: "Joyride Sour Cherry Ropes",
    price: 5.0,
    category: "Sour",
    emoji: "🍒",
  },
  {
    id: "4",
    name: "GHIRADRLLY Caramel Milk Chocolate",
    price: 1.25,
    category: "Chocolate",
    emoji: "🍫",
  },
  { id: "5", name: "Ring Pop", price: 8.34, category: "Lollipop", emoji: "💍" },
  {
    id: "6",
    name: "KitKat Bear",
    price: 11.5,
    category: "Chocolate",
    emoji: "🐻",
  },
  {
    id: "7",
    name: "Dunkin Box o Chocolate",
    price: 5.5,
    category: "Chocolate",
    emoji: "🍩",
  },
  {
    id: "8",
    name: "Skittle Heart",
    price: 2.0,
    category: "Fruity",
    emoji: "❤️",
  },
  {
    id: "9",
    name: "Haribo Twin Snakes",
    price: 2.4,
    category: "Gummy",
    emoji: "🐍",
  },
  {
    id: "10",
    name: "Lollipop Rings",
    price: 0.5,
    category: "Lollipop",
    emoji: "🍭",
  },
  {
    id: "11",
    name: "Sour Strips Sour Cherry",
    price: 3.29,
    category: "Sour",
    emoji: "🍬",
  },
  {
    id: "12",
    name: "Mega Mini M&M",
    price: 2.75,
    category: "Chocolate",
    emoji: "🟡",
  },
  {
    id: "13",
    name: "Mini M&M",
    price: 1.25,
    category: "Chocolate",
    emoji: "🔵",
  },
  {
    id: "14",
    name: "Whole Yonk Bag",
    price: 5.43,
    category: "Candy",
    emoji: "🎁",
  },
  { id: "15", name: "Gummy Pizza", price: 0.5, category: "Gummy", emoji: "🍕" },
  {
    id: "16",
    name: "Small Chocolate",
    price: 0.75,
    category: "Chocolate",
    emoji: "🍫",
  },
  {
    id: "17",
    name: "Strawberry Peelable Gummy Candy Hearts",
    price: 1.0,
    category: "Gummy",
    emoji: "🍓",
  },
  {
    id: "18",
    name: "Cupids Arrow Pretzel Candy",
    price: 5.49,
    category: "Candy",
    emoji: "💘",
  },
  {
    id: "19",
    name: "Conversation Candy Hearts",
    price: 2.99,
    category: "Candy",
    emoji: "💬",
  },
  {
    id: "20",
    name: "Chocolate Break Apart Hearts",
    price: 5.0,
    category: "Chocolate",
    emoji: "💝",
  },
  {
    id: "21",
    name: "Valentine Candy Grazing Board Kit",
    price: 15.0,
    category: "Special",
    emoji: "🎀",
  },
];

// "Whole Yonk Bag" note — piece price
const PIECE_PRICES: Record<string, number> = { "14": 0.27 };

const CATEGORIES = [
  "All",
  ...Array.from(new Set(PRODUCTS.map((p) => p.category))),
];

export default function CatalogPage() {
  const { cart, cartCount, cartTotal, addToCart, updateQty, clearCart } =
    useCart();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showCheckout, setShowCheckout] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const placeOrder = usePlaceOrder();

  const filtered =
    selectedCategory === "All"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === selectedCategory);

  async function handleSubmitOrder(e: React.FormEvent) {
    e.preventDefault();
    if (cart.length === 0) {
      toast.error("Your cart is empty");
      return;
    }
    try {
      await placeOrder.mutateAsync({
        customerName: form.name,
        customerEmail: form.email,
        customerPhone: form.phone,
        items: cart,
      });
      setOrderSuccess(true);
      clearCart();
      setForm({ name: "", email: "", phone: "" });
      setShowCheckout(false);
    } catch {
      toast.error("Failed to place order. Please try again.");
    }
  }

  if (orderSuccess) {
    return (
      <div
        className="max-w-2xl mx-auto px-4 py-24 text-center"
        data-ocid="order-success"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", bounce: 0.4 }}
        >
          <div className="text-7xl mb-4">🎉</div>
          <CheckCircle2 className="mx-auto text-accent mb-4" size={48} />
          <h2 className="font-display font-black text-4xl text-foreground mb-3">
            Order Placed!
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Thanks for your sweet order! We'll be in touch soon. 🍬
          </p>
          <Button
            size="lg"
            onClick={() => setOrderSuccess(false)}
            className="font-display font-bold"
            data-ocid="continue-shopping"
          >
            <Sparkles size={16} className="mr-2" />
            Keep Shopping
          </Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden bg-card border-b border-border">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url('/assets/generated/candy-hero.dim_1200x400.jpg')",
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-5xl mb-3 select-none">🍬🍭🍫</p>
            <h1 className="font-display font-black text-5xl sm:text-6xl text-primary tracking-tight mb-3">
              Sweet Deal Candy
            </h1>
            <p className="text-muted-foreground text-xl max-w-xl mx-auto">
              Hand-picked treats at unbeatable prices — pick your favourites and
              place an order today!
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Product grid */}
          <div className="flex-1 min-w-0">
            {/* Category filters */}
            <div
              className="flex flex-wrap gap-2 mb-6"
              data-ocid="category-filter"
            >
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={[
                    "px-4 py-1.5 rounded-full text-sm font-display font-bold border transition-smooth",
                    selectedCategory === cat
                      ? "bg-primary text-primary-foreground border-primary shadow-subtle"
                      : "bg-card text-muted-foreground border-border hover:border-primary/50 hover:text-primary",
                  ].join(" ")}
                  data-ocid={`filter-${cat.toLowerCase()}`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
              {filtered.map((product, i) => {
                const inCart = cart.find((c) => c.productName === product.name);
                return (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.035, duration: 0.4 }}
                  >
                    <Card
                      className="shadow-card hover:shadow-lg transition-smooth group border-border bg-card h-full flex flex-col"
                      data-ocid={`product-${product.id}`}
                    >
                      <CardContent className="p-4 flex flex-col h-full">
                        <div className="flex items-start justify-between gap-2 mb-3">
                          <span className="text-4xl group-hover:scale-110 transition-smooth select-none">
                            {product.emoji}
                          </span>
                          <Badge
                            variant="secondary"
                            className="text-xs shrink-0 font-medium"
                          >
                            {product.category}
                          </Badge>
                        </div>
                        <h3 className="font-display font-bold text-sm text-foreground leading-tight mb-1 line-clamp-2 flex-1">
                          {product.name}
                        </h3>
                        {PIECE_PRICES[product.id] && (
                          <p className="text-xs text-muted-foreground mb-1">
                            Piece: ${PIECE_PRICES[product.id].toFixed(2)}
                          </p>
                        )}
                        <p className="text-primary font-black text-xl mb-3">
                          ${product.price.toFixed(2)}
                        </p>
                        {inCart ? (
                          <div className="flex items-center gap-2">
                            <button
                              type="button"
                              onClick={() => updateQty(product.name, -1)}
                              className="flex-1 h-8 rounded-lg bg-muted hover:bg-muted/70 flex items-center justify-center transition-colors duration-200 border border-border"
                              aria-label="Decrease quantity"
                            >
                              {inCart.quantity === 1 ? (
                                <Trash2 size={13} />
                              ) : (
                                <Minus size={13} />
                              )}
                            </button>
                            <span className="font-display font-black text-sm w-6 text-center text-primary">
                              {inCart.quantity}
                            </span>
                            <button
                              type="button"
                              onClick={() => updateQty(product.name, 1)}
                              className="flex-1 h-8 rounded-lg bg-muted hover:bg-muted/70 flex items-center justify-center transition-colors duration-200 border border-border"
                              aria-label="Increase quantity"
                            >
                              <Plus size={13} />
                            </button>
                          </div>
                        ) : (
                          <Button
                            className="w-full font-display font-bold text-sm"
                            size="sm"
                            onClick={() => {
                              addToCart(product.name, product.price);
                              toast.success(`${product.emoji} Added to cart!`, {
                                duration: 1800,
                              });
                            }}
                            data-ocid={`add-to-cart-${product.id}`}
                          >
                            <Plus size={14} className="mr-1" /> Add to Order
                          </Button>
                        )}
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Cart sidebar */}
          <div className="lg:w-80 shrink-0">
            <div className="sticky top-24">
              <Card className="shadow-card border-border bg-card">
                <CardContent className="p-5">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="font-display font-black text-lg text-foreground flex items-center gap-2">
                      <ShoppingCart size={20} className="text-primary" />
                      Your Order
                    </h2>
                    {cartCount > 0 && (
                      <Badge className="bg-primary text-primary-foreground font-bold">
                        {cartCount}
                      </Badge>
                    )}
                  </div>

                  {cart.length === 0 ? (
                    <div className="text-center py-10" data-ocid="empty-cart">
                      <p className="text-5xl mb-3">🛒</p>
                      <p className="text-muted-foreground text-sm font-medium">
                        Add some sweets to get started!
                      </p>
                    </div>
                  ) : (
                    <>
                      <div
                        className="space-y-3 mb-4 max-h-64 overflow-y-auto"
                        data-ocid="cart-items"
                      >
                        {cart.map((item) => (
                          <div
                            key={item.productName}
                            className="flex items-center gap-2"
                            data-ocid={`cart-item-${item.productName.replace(/\s+/g, "-").toLowerCase()}`}
                          >
                            <div className="flex-1 min-w-0">
                              <p className="text-xs font-semibold text-foreground truncate">
                                {item.productName}
                              </p>
                              <p className="text-xs text-muted-foreground">
                                ${item.unitPrice.toFixed(2)} × {item.quantity} ={" "}
                                <span className="text-primary font-bold">
                                  ${(item.unitPrice * item.quantity).toFixed(2)}
                                </span>
                              </p>
                            </div>
                            <div className="flex items-center gap-1 shrink-0">
                              <button
                                type="button"
                                onClick={() => updateQty(item.productName, -1)}
                                className="w-6 h-6 rounded-md bg-muted hover:bg-muted/70 flex items-center justify-center transition-colors duration-200"
                                aria-label="Decrease quantity"
                              >
                                {item.quantity === 1 ? (
                                  <Trash2 size={10} />
                                ) : (
                                  <Minus size={10} />
                                )}
                              </button>
                              <span className="w-5 text-center text-xs font-black text-primary">
                                {item.quantity}
                              </span>
                              <button
                                type="button"
                                onClick={() => updateQty(item.productName, 1)}
                                className="w-6 h-6 rounded-md bg-muted hover:bg-muted/70 flex items-center justify-center transition-colors duration-200"
                                aria-label="Increase quantity"
                              >
                                <Plus size={10} />
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>

                      <Separator className="mb-4" />

                      <div className="flex justify-between font-display font-black text-lg mb-4">
                        <span className="text-foreground">Total</span>
                        <span className="text-primary">
                          ${cartTotal.toFixed(2)}
                        </span>
                      </div>

                      <Button
                        className="w-full font-display font-bold mb-3"
                        onClick={() => setShowCheckout((v) => !v)}
                        data-ocid="toggle-checkout-form"
                      >
                        {showCheckout ? "Cancel ✕" : "🍬 Place Order"}
                      </Button>

                      <AnimatePresence>
                        {showCheckout && (
                          <motion.form
                            key="checkout-form"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.25 }}
                            onSubmit={handleSubmitOrder}
                            className="space-y-3 overflow-hidden"
                            data-ocid="checkout-form"
                          >
                            <div className="pt-1">
                              <Label
                                htmlFor="name"
                                className="text-xs font-semibold"
                              >
                                Your Name
                              </Label>
                              <Input
                                id="name"
                                required
                                value={form.name}
                                onChange={(e) =>
                                  setForm((f) => ({
                                    ...f,
                                    name: e.target.value,
                                  }))
                                }
                                placeholder="Jane Smith"
                                className="mt-1 h-8 text-sm"
                                data-ocid="input-name"
                              />
                            </div>
                            <div>
                              <Label
                                htmlFor="email"
                                className="text-xs font-semibold"
                              >
                                Email
                              </Label>
                              <Input
                                id="email"
                                type="email"
                                required
                                value={form.email}
                                onChange={(e) =>
                                  setForm((f) => ({
                                    ...f,
                                    email: e.target.value,
                                  }))
                                }
                                placeholder="jane@example.com"
                                className="mt-1 h-8 text-sm"
                                data-ocid="input-email"
                              />
                            </div>
                            <div>
                              <Label
                                htmlFor="phone"
                                className="text-xs font-semibold"
                              >
                                Phone
                              </Label>
                              <Input
                                id="phone"
                                type="tel"
                                required
                                value={form.phone}
                                onChange={(e) =>
                                  setForm((f) => ({
                                    ...f,
                                    phone: e.target.value,
                                  }))
                                }
                                placeholder="+1 555 0100"
                                className="mt-1 h-8 text-sm"
                                data-ocid="input-phone"
                              />
                            </div>
                            <Button
                              type="submit"
                              className="w-full font-display font-bold"
                              disabled={placeOrder.isPending}
                              data-ocid="submit-order"
                            >
                              {placeOrder.isPending
                                ? "Placing order…"
                                : "✨ Confirm Order"}
                            </Button>
                          </motion.form>
                        )}
                      </AnimatePresence>
                    </>
                  )}
                </CardContent>
              </Card>

              {/* Yonk bag note */}
              <p className="text-xs text-muted-foreground mt-3 text-center px-2">
                💡 Whole Yonk Bag: whole bag $5.43 · individual piece $0.27
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
