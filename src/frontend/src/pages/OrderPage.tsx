import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { usePlaceOrder } from "@/hooks/useBackend";
import type { CartItem, Product } from "@/types";
import {
  ArrowLeft,
  CheckCircle2,
  ChevronRight,
  Mail,
  Minus,
  Phone,
  Plus,
  ShoppingCart,
  Trash2,
  User,
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
    name: "Ghirardelli Caramel Milk Chocolate",
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

type Step = "select" | "review" | "details";

function StepIndicator({ step }: { step: Step }) {
  const steps: { key: Step; label: string }[] = [
    { key: "select", label: "Choose Sweets" },
    { key: "review", label: "Review Cart" },
    { key: "details", label: "Your Info" },
  ];
  const idx = steps.findIndex((s) => s.key === step);
  return (
    <div className="flex items-center justify-center gap-1 sm:gap-3 mb-8">
      {steps.map((s, i) => (
        <div key={s.key} className="flex items-center gap-1 sm:gap-2">
          <div
            className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-colors duration-300 ${
              i <= idx
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground"
            }`}
          >
            {i + 1}
          </div>
          <span
            className={`text-xs sm:text-sm font-medium hidden sm:inline ${
              i <= idx ? "text-foreground" : "text-muted-foreground"
            }`}
          >
            {s.label}
          </span>
          {i < steps.length - 1 && (
            <ChevronRight size={14} className="text-muted-foreground ml-1" />
          )}
        </div>
      ))}
    </div>
  );
}

export default function OrderPage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [step, setStep] = useState<Step>("select");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [errors, setErrors] = useState<Partial<typeof form>>({});
  const [orderSuccess, setOrderSuccess] = useState(false);
  const placeOrder = usePlaceOrder();

  const categories = [
    "All",
    ...Array.from(new Set(PRODUCTS.map((p) => p.category))),
  ];
  const filtered =
    selectedCategory === "All"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === selectedCategory);
  const cartTotal = cart.reduce((sum, i) => sum + i.unitPrice * i.quantity, 0);
  const cartCount = cart.reduce((sum, i) => sum + i.quantity, 0);

  function addToCart(product: Product) {
    setCart((prev) => {
      const existing = prev.find((i) => i.productName === product.name);
      if (existing) {
        return prev.map((i) =>
          i.productName === product.name
            ? { ...i, quantity: i.quantity + 1 }
            : i,
        );
      }
      return [
        ...prev,
        { productName: product.name, unitPrice: product.price, quantity: 1 },
      ];
    });
  }

  function updateQty(name: string, delta: number) {
    setCart((prev) =>
      prev
        .map((i) =>
          i.productName === name ? { ...i, quantity: i.quantity + delta } : i,
        )
        .filter((i) => i.quantity > 0),
    );
  }

  function validateForm() {
    const errs: Partial<typeof form> = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = "Enter a valid email";
    if (!form.phone.trim()) errs.phone = "Phone is required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  }

  async function handleSubmitOrder(e: React.FormEvent) {
    e.preventDefault();
    if (!validateForm()) return;
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
      setCart([]);
      setForm({ name: "", email: "", phone: "" });
    } catch {
      toast.error("Something went wrong. Please try again.");
    }
  }

  if (orderSuccess) {
    return (
      <div
        className="min-h-[70vh] flex items-center justify-center px-4"
        data-ocid="order-success"
      >
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 18 }}
          className="text-center max-w-lg"
        >
          <div className="w-24 h-24 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 size={52} className="text-accent" />
          </div>
          <h2 className="font-display font-black text-4xl text-foreground mb-3">
            🎉 Order Placed!
          </h2>
          <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
            Your order has been placed! We'll be in touch soon.
          </p>
          <div className="candy-gradient rounded-2xl p-6 mb-8 text-left space-y-2">
            <p className="font-display font-bold text-sm text-foreground">
              What happens next?
            </p>
            <p className="text-sm text-muted-foreground">
              📞 We'll call or text your phone number to confirm
            </p>
            <p className="text-sm text-muted-foreground">
              📦 Your sweet treats will be ready for pickup or delivery
            </p>
            <p className="text-sm text-muted-foreground">
              💝 Enjoy the sweetest deals in town!
            </p>
          </div>
          <Button
            onClick={() => {
              setOrderSuccess(false);
              setStep("select");
            }}
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-display font-bold px-8"
            data-ocid="order-again"
          >
            Order Again
          </Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Page header */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-6"
      >
        <h1 className="font-display font-black text-3xl sm:text-4xl text-foreground mb-1">
          Place Your Order 🍬
        </h1>
        <p className="text-muted-foreground">
          Pick your favourites, review, and we'll handle the rest!
        </p>
      </motion.div>

      <StepIndicator step={step} />

      <AnimatePresence mode="wait">
        {/* ── Step 1: Select Products ── */}
        {step === "select" && (
          <motion.div
            key="select"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.25 }}
          >
            {/* Category filter */}
            <div
              className="flex flex-wrap gap-2 mb-5"
              data-ocid="category-filter"
            >
              {categories.map((cat) => (
                <Button
                  key={cat}
                  variant={selectedCategory === cat ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(cat)}
                  data-ocid={`filter-${cat.toLowerCase()}`}
                >
                  {cat}
                </Button>
              ))}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-8">
              {filtered.map((product, i) => {
                const inCart = cart.find((c) => c.productName === product.name);
                return (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.03 }}
                  >
                    <Card
                      className={`shadow-card hover:shadow-lg transition-smooth border-border group ${
                        inCart ? "ring-2 ring-primary/50" : ""
                      }`}
                      data-ocid={`product-${product.id}`}
                    >
                      <CardContent className="p-3">
                        <div className="flex items-start justify-between gap-1 mb-2">
                          <span className="text-3xl">{product.emoji}</span>
                          {inCart && (
                            <Badge className="bg-primary text-primary-foreground text-xs px-1.5">
                              ×{inCart.quantity}
                            </Badge>
                          )}
                        </div>
                        <p className="font-display font-bold text-xs text-foreground leading-tight mb-1 line-clamp-2">
                          {product.name}
                        </p>
                        <p className="text-primary font-black text-base mb-2">
                          ${product.price.toFixed(2)}
                        </p>
                        <Button
                          size="sm"
                          className="w-full text-xs h-7"
                          onClick={() => addToCart(product)}
                          data-ocid={`add-${product.id}`}
                        >
                          <Plus size={12} className="mr-1" />
                          {inCart ? "Add More" : "Add"}
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>

            {/* Floating cart bar */}
            <AnimatePresence>
              {cartCount > 0 && (
                <motion.div
                  initial={{ y: 60, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 60, opacity: 0 }}
                  className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-sm px-4"
                  data-ocid="floating-cart-bar"
                >
                  <button
                    type="button"
                    onClick={() => setStep("review")}
                    className="w-full flex items-center justify-between bg-primary text-primary-foreground rounded-2xl px-5 py-4 shadow-lg hover:bg-primary/90 transition-smooth font-display font-bold"
                    data-ocid="go-to-review"
                  >
                    <div className="flex items-center gap-2">
                      <ShoppingCart size={18} />
                      <span>
                        {cartCount} item{cartCount !== 1 ? "s" : ""}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>${cartTotal.toFixed(2)}</span>
                      <ChevronRight size={16} />
                    </div>
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}

        {/* ── Step 2: Review Cart ── */}
        {step === "review" && (
          <motion.div
            key="review"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.25 }}
            className="max-w-2xl mx-auto"
          >
            <button
              type="button"
              onClick={() => setStep("select")}
              className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-5 transition-colors duration-200"
              data-ocid="back-to-select"
            >
              <ArrowLeft size={14} /> Back to products
            </button>

            <Card
              className="shadow-card border-border mb-6"
              data-ocid="cart-review"
            >
              <CardContent className="p-6">
                <h2 className="font-display font-black text-xl text-foreground mb-5 flex items-center gap-2">
                  <ShoppingCart size={20} className="text-primary" />
                  Order Summary
                </h2>

                {cart.length === 0 ? (
                  <div className="text-center py-10" data-ocid="empty-cart">
                    <p className="text-5xl mb-3">🛒</p>
                    <p className="text-muted-foreground">Your cart is empty</p>
                    <Button
                      variant="outline"
                      className="mt-4"
                      onClick={() => setStep("select")}
                    >
                      Browse Products
                    </Button>
                  </div>
                ) : (
                  <>
                    <div className="space-y-4 mb-5" data-ocid="cart-items">
                      {cart.map((item, i) => (
                        <motion.div
                          key={item.productName}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.05 }}
                          className="flex items-center gap-3"
                          data-ocid={`cart-item-${i}`}
                        >
                          <div className="flex-1 min-w-0">
                            <p className="font-medium text-sm text-foreground truncate">
                              {item.productName}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              ${item.unitPrice.toFixed(2)} each
                            </p>
                          </div>
                          <div className="flex items-center gap-2">
                            <button
                              type="button"
                              onClick={() => updateQty(item.productName, -1)}
                              className="w-8 h-8 rounded-lg bg-muted hover:bg-muted/70 flex items-center justify-center transition-colors duration-200"
                              aria-label="Decrease quantity"
                              data-ocid={`decrease-${i}`}
                            >
                              {item.quantity === 1 ? (
                                <Trash2 size={13} />
                              ) : (
                                <Minus size={13} />
                              )}
                            </button>
                            <span className="w-6 text-center font-bold text-sm">
                              {item.quantity}
                            </span>
                            <button
                              type="button"
                              onClick={() => updateQty(item.productName, 1)}
                              className="w-8 h-8 rounded-lg bg-muted hover:bg-muted/70 flex items-center justify-center transition-colors duration-200"
                              aria-label="Increase quantity"
                              data-ocid={`increase-${i}`}
                            >
                              <Plus size={13} />
                            </button>
                          </div>
                          <div className="w-16 text-right">
                            <p className="font-bold text-sm text-foreground">
                              ${(item.unitPrice * item.quantity).toFixed(2)}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    <Separator className="mb-5" />

                    <div className="space-y-2 mb-6">
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>
                          Subtotal ({cartCount} item{cartCount !== 1 ? "s" : ""}
                          )
                        </span>
                        <span>${cartTotal.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between font-display font-black text-xl text-foreground">
                        <span>Total</span>
                        <span className="text-primary">
                          ${cartTotal.toFixed(2)}
                        </span>
                      </div>
                    </div>

                    <Button
                      className="w-full font-display font-bold text-base h-12"
                      onClick={() => setStep("details")}
                      data-ocid="go-to-details"
                    >
                      Continue to Your Info{" "}
                      <ChevronRight size={16} className="ml-1" />
                    </Button>
                  </>
                )}
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* ── Step 3: Customer Details ── */}
        {step === "details" && (
          <motion.div
            key="details"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.25 }}
            className="max-w-2xl mx-auto"
          >
            <button
              type="button"
              onClick={() => setStep("review")}
              className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-5 transition-colors duration-200"
              data-ocid="back-to-review"
            >
              <ArrowLeft size={14} /> Back to cart
            </button>

            <div className="grid lg:grid-cols-5 gap-6">
              {/* Order form */}
              <div className="lg:col-span-3">
                <Card className="shadow-card border-border">
                  <CardContent className="p-6">
                    <h2 className="font-display font-black text-xl text-foreground mb-6">
                      Your Details
                    </h2>
                    <form
                      onSubmit={handleSubmitOrder}
                      className="space-y-5"
                      data-ocid="order-form"
                    >
                      <div>
                        <Label
                          htmlFor="order-name"
                          className="flex items-center gap-1.5 mb-1.5 font-medium"
                        >
                          <User size={14} className="text-primary" /> Full Name
                        </Label>
                        <Input
                          id="order-name"
                          value={form.name}
                          onChange={(e) => {
                            setForm((f) => ({ ...f, name: e.target.value }));
                            if (errors.name)
                              setErrors((er) => ({ ...er, name: undefined }));
                          }}
                          placeholder="Jane Smith"
                          className={
                            errors.name
                              ? "border-destructive focus-visible:ring-destructive"
                              : ""
                          }
                          data-ocid="input-name"
                        />
                        {errors.name && (
                          <p className="text-destructive text-xs mt-1">
                            {errors.name}
                          </p>
                        )}
                      </div>

                      <div>
                        <Label
                          htmlFor="order-email"
                          className="flex items-center gap-1.5 mb-1.5 font-medium"
                        >
                          <Mail size={14} className="text-primary" /> Email
                          Address
                        </Label>
                        <Input
                          id="order-email"
                          type="email"
                          value={form.email}
                          onChange={(e) => {
                            setForm((f) => ({ ...f, email: e.target.value }));
                            if (errors.email)
                              setErrors((er) => ({ ...er, email: undefined }));
                          }}
                          placeholder="jane@example.com"
                          className={
                            errors.email
                              ? "border-destructive focus-visible:ring-destructive"
                              : ""
                          }
                          data-ocid="input-email"
                        />
                        {errors.email && (
                          <p className="text-destructive text-xs mt-1">
                            {errors.email}
                          </p>
                        )}
                      </div>

                      <div>
                        <Label
                          htmlFor="order-phone"
                          className="flex items-center gap-1.5 mb-1.5 font-medium"
                        >
                          <Phone size={14} className="text-primary" /> Phone
                          Number
                        </Label>
                        <Input
                          id="order-phone"
                          type="tel"
                          value={form.phone}
                          onChange={(e) => {
                            setForm((f) => ({ ...f, phone: e.target.value }));
                            if (errors.phone)
                              setErrors((er) => ({ ...er, phone: undefined }));
                          }}
                          placeholder="+1 555 0100"
                          className={
                            errors.phone
                              ? "border-destructive focus-visible:ring-destructive"
                              : ""
                          }
                          data-ocid="input-phone"
                        />
                        {errors.phone && (
                          <p className="text-destructive text-xs mt-1">
                            {errors.phone}
                          </p>
                        )}
                      </div>

                      <Separator />

                      <Button
                        type="submit"
                        disabled={placeOrder.isPending || cart.length === 0}
                        className="w-full font-display font-black text-lg rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-smooth shadow-md"
                        style={{ height: "3.25rem" }}
                        data-ocid="submit-order"
                      >
                        {placeOrder.isPending ? (
                          <span className="flex items-center gap-2">
                            <motion.span
                              animate={{ rotate: 360 }}
                              transition={{
                                repeat: Number.POSITIVE_INFINITY,
                                duration: 1,
                                ease: "linear",
                              }}
                              className="inline-block w-4 h-4 border-2 border-primary-foreground/40 border-t-primary-foreground rounded-full"
                            />
                            Placing Order…
                          </span>
                        ) : (
                          `🍬 Place Order — $${cartTotal.toFixed(2)}`
                        )}
                      </Button>

                      <p className="text-xs text-muted-foreground text-center">
                        We'll confirm your order and be in touch soon 💝
                      </p>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Mini order summary */}
              <div className="lg:col-span-2">
                <Card className="shadow-card border-border bg-muted/30 sticky top-24">
                  <CardContent className="p-5">
                    <h3 className="font-display font-bold text-base text-foreground mb-4">
                      Order Summary
                    </h3>
                    <div
                      className="space-y-2.5 mb-4 max-h-56 overflow-y-auto"
                      data-ocid="order-summary-items"
                    >
                      {cart.map((item) => (
                        <div
                          key={item.productName}
                          className="flex justify-between gap-2 text-sm"
                        >
                          <span className="text-foreground truncate flex-1 min-w-0">
                            {item.productName}
                            <span className="text-muted-foreground ml-1">
                              ×{item.quantity}
                            </span>
                          </span>
                          <span className="font-medium shrink-0">
                            ${(item.unitPrice * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      ))}
                    </div>
                    <Separator className="mb-3" />
                    <div className="flex justify-between font-display font-black text-base">
                      <span>Total</span>
                      <span className="text-primary">
                        ${cartTotal.toFixed(2)}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
