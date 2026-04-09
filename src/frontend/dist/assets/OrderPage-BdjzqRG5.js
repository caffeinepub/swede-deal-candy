import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, a as ue } from "./index-BgLvjk3i.js";
import { u as usePlaceOrder, m as motion, B as Button, C as Card, a as CardContent, b as Badge, S as Separator } from "./proxy-CtOolpFJ.js";
import { C as CircleCheck, A as AnimatePresence, P as Plus, S as ShoppingCart, T as Trash2, M as Minus, L as Label, I as Input } from "./index-Djz4JyCG.js";
import { U as User, M as Mail, P as Phone } from "./user-B-w8BVuc.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
];
const ArrowLeft = createLucideIcon("arrow-left", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]];
const ChevronRight = createLucideIcon("chevron-right", __iconNode);
const PRODUCTS = [
  {
    id: "1",
    name: "Snoopy Hershey Kisses",
    price: 1.5,
    category: "Chocolate",
    emoji: "🍫"
  },
  {
    id: "2",
    name: "Joyride Gummy Busters",
    price: 3.55,
    category: "Gummy",
    emoji: "🐛"
  },
  {
    id: "3",
    name: "Joyride Sour Cherry Ropes",
    price: 5,
    category: "Sour",
    emoji: "🍒"
  },
  {
    id: "4",
    name: "Ghirardelli Caramel Milk Chocolate",
    price: 1.25,
    category: "Chocolate",
    emoji: "🍫"
  },
  { id: "5", name: "Ring Pop", price: 8.34, category: "Lollipop", emoji: "💍" },
  {
    id: "6",
    name: "KitKat Bear",
    price: 11.5,
    category: "Chocolate",
    emoji: "🐻"
  },
  {
    id: "7",
    name: "Dunkin Box o Chocolate",
    price: 5.5,
    category: "Chocolate",
    emoji: "🍩"
  },
  {
    id: "8",
    name: "Skittle Heart",
    price: 2,
    category: "Fruity",
    emoji: "❤️"
  },
  {
    id: "9",
    name: "Haribo Twin Snakes",
    price: 2.4,
    category: "Gummy",
    emoji: "🐍"
  },
  {
    id: "10",
    name: "Lollipop Rings",
    price: 0.5,
    category: "Lollipop",
    emoji: "🍭"
  },
  {
    id: "11",
    name: "Sour Strips Sour Cherry",
    price: 3.29,
    category: "Sour",
    emoji: "🍬"
  },
  {
    id: "12",
    name: "Mega Mini M&M",
    price: 2.75,
    category: "Chocolate",
    emoji: "🟡"
  },
  {
    id: "13",
    name: "Mini M&M",
    price: 1.25,
    category: "Chocolate",
    emoji: "🔵"
  },
  {
    id: "14",
    name: "Whole Yonk Bag",
    price: 5.43,
    category: "Candy",
    emoji: "🎁"
  },
  { id: "15", name: "Gummy Pizza", price: 0.5, category: "Gummy", emoji: "🍕" },
  {
    id: "16",
    name: "Small Chocolate",
    price: 0.75,
    category: "Chocolate",
    emoji: "🍫"
  },
  {
    id: "17",
    name: "Strawberry Peelable Gummy Candy Hearts",
    price: 1,
    category: "Gummy",
    emoji: "🍓"
  },
  {
    id: "18",
    name: "Cupids Arrow Pretzel Candy",
    price: 5.49,
    category: "Candy",
    emoji: "💘"
  },
  {
    id: "19",
    name: "Conversation Candy Hearts",
    price: 2.99,
    category: "Candy",
    emoji: "💬"
  },
  {
    id: "20",
    name: "Chocolate Break Apart Hearts",
    price: 5,
    category: "Chocolate",
    emoji: "💝"
  },
  {
    id: "21",
    name: "Valentine Candy Grazing Board Kit",
    price: 15,
    category: "Special",
    emoji: "🎀"
  }
];
function StepIndicator({ step }) {
  const steps = [
    { key: "select", label: "Choose Sweets" },
    { key: "review", label: "Review Cart" },
    { key: "details", label: "Your Info" }
  ];
  const idx = steps.findIndex((s) => s.key === step);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center gap-1 sm:gap-3 mb-8", children: steps.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 sm:gap-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: `w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-colors duration-300 ${i <= idx ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`,
        children: i + 1
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "span",
      {
        className: `text-xs sm:text-sm font-medium hidden sm:inline ${i <= idx ? "text-foreground" : "text-muted-foreground"}`,
        children: s.label
      }
    ),
    i < steps.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 14, className: "text-muted-foreground ml-1" })
  ] }, s.key)) });
}
function OrderPage() {
  const [cart, setCart] = reactExports.useState([]);
  const [step, setStep] = reactExports.useState("select");
  const [selectedCategory, setSelectedCategory] = reactExports.useState("All");
  const [form, setForm] = reactExports.useState({ name: "", email: "", phone: "" });
  const [errors, setErrors] = reactExports.useState({});
  const [orderSuccess, setOrderSuccess] = reactExports.useState(false);
  const placeOrder = usePlaceOrder();
  const categories = [
    "All",
    ...Array.from(new Set(PRODUCTS.map((p) => p.category)))
  ];
  const filtered = selectedCategory === "All" ? PRODUCTS : PRODUCTS.filter((p) => p.category === selectedCategory);
  const cartTotal = cart.reduce((sum, i) => sum + i.unitPrice * i.quantity, 0);
  const cartCount = cart.reduce((sum, i) => sum + i.quantity, 0);
  function addToCart(product) {
    setCart((prev) => {
      const existing = prev.find((i) => i.productName === product.name);
      if (existing) {
        return prev.map(
          (i) => i.productName === product.name ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [
        ...prev,
        { productName: product.name, unitPrice: product.price, quantity: 1 }
      ];
    });
  }
  function updateQty(name, delta) {
    setCart(
      (prev) => prev.map(
        (i) => i.productName === name ? { ...i, quantity: i.quantity + delta } : i
      ).filter((i) => i.quantity > 0)
    );
  }
  function validateForm() {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = "Enter a valid email";
    if (!form.phone.trim()) errs.phone = "Phone is required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  }
  async function handleSubmitOrder(e) {
    e.preventDefault();
    if (!validateForm()) return;
    if (cart.length === 0) {
      ue.error("Your cart is empty");
      return;
    }
    try {
      await placeOrder.mutateAsync({
        customerName: form.name,
        customerEmail: form.email,
        customerPhone: form.phone,
        items: cart
      });
      setOrderSuccess(true);
      setCart([]);
      setForm({ name: "", email: "", phone: "" });
    } catch {
      ue.error("Something went wrong. Please try again.");
    }
  }
  if (orderSuccess) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "min-h-[70vh] flex items-center justify-center px-4",
        "data-ocid": "order-success",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { scale: 0.85, opacity: 0 },
            animate: { scale: 1, opacity: 1 },
            transition: { type: "spring", stiffness: 200, damping: 18 },
            className: "text-center max-w-lg",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-24 h-24 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { size: 52, className: "text-accent" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-black text-4xl text-foreground mb-3", children: "🎉 Order Placed!" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-lg mb-8 leading-relaxed", children: "Your order has been placed! We'll be in touch soon." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "candy-gradient rounded-2xl p-6 mb-8 text-left space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-bold text-sm text-foreground", children: "What happens next?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "📞 We'll call or text your phone number to confirm" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "📦 Your sweet treats will be ready for pickup or delivery" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "💝 Enjoy the sweetest deals in town!" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  onClick: () => {
                    setOrderSuccess(false);
                    setStep("select");
                  },
                  className: "bg-primary text-primary-foreground hover:bg-primary/90 font-display font-bold px-8",
                  "data-ocid": "order-again",
                  children: "Order Again"
                }
              )
            ]
          }
        )
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: -12 },
        animate: { opacity: 1, y: 0 },
        className: "text-center mb-6",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display font-black text-3xl sm:text-4xl text-foreground mb-1", children: "Place Your Order 🍬" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Pick your favourites, review, and we'll handle the rest!" })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(StepIndicator, { step }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimatePresence, { mode: "wait", children: [
      step === "select" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: -20 },
          animate: { opacity: 1, x: 0 },
          exit: { opacity: 0, x: 20 },
          transition: { duration: 0.25 },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "flex flex-wrap gap-2 mb-5",
                "data-ocid": "category-filter",
                children: categories.map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    variant: selectedCategory === cat ? "default" : "outline",
                    size: "sm",
                    onClick: () => setSelectedCategory(cat),
                    "data-ocid": `filter-${cat.toLowerCase()}`,
                    children: cat
                  },
                  cat
                ))
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-8", children: filtered.map((product, i) => {
              const inCart = cart.find((c) => c.productName === product.name);
              return /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  initial: { opacity: 0, y: 12 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: true },
                  transition: { delay: i * 0.03 },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Card,
                    {
                      className: `shadow-card hover:shadow-lg transition-smooth border-border group ${inCart ? "ring-2 ring-primary/50" : ""}`,
                      "data-ocid": `product-${product.id}`,
                      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-3", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-1 mb-2", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl", children: product.emoji }),
                          inCart && /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "bg-primary text-primary-foreground text-xs px-1.5", children: [
                            "×",
                            inCart.quantity
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-bold text-xs text-foreground leading-tight mb-1 line-clamp-2", children: product.name }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-primary font-black text-base mb-2", children: [
                          "$",
                          product.price.toFixed(2)
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          Button,
                          {
                            size: "sm",
                            className: "w-full text-xs h-7",
                            onClick: () => addToCart(product),
                            "data-ocid": `add-${product.id}`,
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 12, className: "mr-1" }),
                              inCart ? "Add More" : "Add"
                            ]
                          }
                        )
                      ] })
                    }
                  )
                },
                product.id
              );
            }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: cartCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                initial: { y: 60, opacity: 0 },
                animate: { y: 0, opacity: 1 },
                exit: { y: 60, opacity: 0 },
                className: "fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-sm px-4",
                "data-ocid": "floating-cart-bar",
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: () => setStep("review"),
                    className: "w-full flex items-center justify-between bg-primary text-primary-foreground rounded-2xl px-5 py-4 shadow-lg hover:bg-primary/90 transition-smooth font-display font-bold",
                    "data-ocid": "go-to-review",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingCart, { size: 18 }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                          cartCount,
                          " item",
                          cartCount !== 1 ? "s" : ""
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                          "$",
                          cartTotal.toFixed(2)
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 16 })
                      ] })
                    ]
                  }
                )
              }
            ) })
          ]
        },
        "select"
      ),
      step === "review" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: -20 },
          animate: { opacity: 1, x: 0 },
          exit: { opacity: 0, x: 20 },
          transition: { duration: 0.25 },
          className: "max-w-2xl mx-auto",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: () => setStep("select"),
                className: "flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-5 transition-colors duration-200",
                "data-ocid": "back-to-select",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { size: 14 }),
                  " Back to products"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Card,
              {
                className: "shadow-card border-border mb-6",
                "data-ocid": "cart-review",
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-6", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display font-black text-xl text-foreground mb-5 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingCart, { size: 20, className: "text-primary" }),
                    "Order Summary"
                  ] }),
                  cart.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-10", "data-ocid": "empty-cart", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-5xl mb-3", children: "🛒" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Your cart is empty" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Button,
                      {
                        variant: "outline",
                        className: "mt-4",
                        onClick: () => setStep("select"),
                        children: "Browse Products"
                      }
                    )
                  ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4 mb-5", "data-ocid": "cart-items", children: cart.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      motion.div,
                      {
                        initial: { opacity: 0, x: -10 },
                        animate: { opacity: 1, x: 0 },
                        transition: { delay: i * 0.05 },
                        className: "flex items-center gap-3",
                        "data-ocid": `cart-item-${i}`,
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-sm text-foreground truncate", children: item.productName }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
                              "$",
                              item.unitPrice.toFixed(2),
                              " each"
                            ] })
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "button",
                              {
                                type: "button",
                                onClick: () => updateQty(item.productName, -1),
                                className: "w-8 h-8 rounded-lg bg-muted hover:bg-muted/70 flex items-center justify-center transition-colors duration-200",
                                "aria-label": "Decrease quantity",
                                "data-ocid": `decrease-${i}`,
                                children: item.quantity === 1 ? /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { size: 13 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, { size: 13 })
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-6 text-center font-bold text-sm", children: item.quantity }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "button",
                              {
                                type: "button",
                                onClick: () => updateQty(item.productName, 1),
                                className: "w-8 h-8 rounded-lg bg-muted hover:bg-muted/70 flex items-center justify-center transition-colors duration-200",
                                "aria-label": "Increase quantity",
                                "data-ocid": `increase-${i}`,
                                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 13 })
                              }
                            )
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-bold text-sm text-foreground", children: [
                            "$",
                            (item.unitPrice * item.quantity).toFixed(2)
                          ] }) })
                        ]
                      },
                      item.productName
                    )) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { className: "mb-5" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 mb-6", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm text-muted-foreground", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                          "Subtotal (",
                          cartCount,
                          " item",
                          cartCount !== 1 ? "s" : "",
                          ")"
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                          "$",
                          cartTotal.toFixed(2)
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between font-display font-black text-xl text-foreground", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Total" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-primary", children: [
                          "$",
                          cartTotal.toFixed(2)
                        ] })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Button,
                      {
                        className: "w-full font-display font-bold text-base h-12",
                        onClick: () => setStep("details"),
                        "data-ocid": "go-to-details",
                        children: [
                          "Continue to Your Info",
                          " ",
                          /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 16, className: "ml-1" })
                        ]
                      }
                    )
                  ] })
                ] })
              }
            )
          ]
        },
        "review"
      ),
      step === "details" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: -20 },
          animate: { opacity: 1, x: 0 },
          exit: { opacity: 0, x: 20 },
          transition: { duration: 0.25 },
          className: "max-w-2xl mx-auto",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: () => setStep("review"),
                className: "flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-5 transition-colors duration-200",
                "data-ocid": "back-to-review",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { size: 14 }),
                  " Back to cart"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-5 gap-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "shadow-card border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-black text-xl text-foreground mb-6", children: "Your Details" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "form",
                  {
                    onSubmit: handleSubmitOrder,
                    className: "space-y-5",
                    "data-ocid": "order-form",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          Label,
                          {
                            htmlFor: "order-name",
                            className: "flex items-center gap-1.5 mb-1.5 font-medium",
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(User, { size: 14, className: "text-primary" }),
                              " Full Name"
                            ]
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Input,
                          {
                            id: "order-name",
                            value: form.name,
                            onChange: (e) => {
                              setForm((f) => ({ ...f, name: e.target.value }));
                              if (errors.name)
                                setErrors((er) => ({ ...er, name: void 0 }));
                            },
                            placeholder: "Jane Smith",
                            className: errors.name ? "border-destructive focus-visible:ring-destructive" : "",
                            "data-ocid": "input-name"
                          }
                        ),
                        errors.name && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-destructive text-xs mt-1", children: errors.name })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          Label,
                          {
                            htmlFor: "order-email",
                            className: "flex items-center gap-1.5 mb-1.5 font-medium",
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { size: 14, className: "text-primary" }),
                              " Email Address"
                            ]
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Input,
                          {
                            id: "order-email",
                            type: "email",
                            value: form.email,
                            onChange: (e) => {
                              setForm((f) => ({ ...f, email: e.target.value }));
                              if (errors.email)
                                setErrors((er) => ({ ...er, email: void 0 }));
                            },
                            placeholder: "jane@example.com",
                            className: errors.email ? "border-destructive focus-visible:ring-destructive" : "",
                            "data-ocid": "input-email"
                          }
                        ),
                        errors.email && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-destructive text-xs mt-1", children: errors.email })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          Label,
                          {
                            htmlFor: "order-phone",
                            className: "flex items-center gap-1.5 mb-1.5 font-medium",
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { size: 14, className: "text-primary" }),
                              " Phone Number"
                            ]
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Input,
                          {
                            id: "order-phone",
                            type: "tel",
                            value: form.phone,
                            onChange: (e) => {
                              setForm((f) => ({ ...f, phone: e.target.value }));
                              if (errors.phone)
                                setErrors((er) => ({ ...er, phone: void 0 }));
                            },
                            placeholder: "+1 555 0100",
                            className: errors.phone ? "border-destructive focus-visible:ring-destructive" : "",
                            "data-ocid": "input-phone"
                          }
                        ),
                        errors.phone && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-destructive text-xs mt-1", children: errors.phone })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Button,
                        {
                          type: "submit",
                          disabled: placeOrder.isPending || cart.length === 0,
                          className: "w-full font-display font-black text-lg rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-smooth shadow-md",
                          style: { height: "3.25rem" },
                          "data-ocid": "submit-order",
                          children: placeOrder.isPending ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              motion.span,
                              {
                                animate: { rotate: 360 },
                                transition: {
                                  repeat: Number.POSITIVE_INFINITY,
                                  duration: 1,
                                  ease: "linear"
                                },
                                className: "inline-block w-4 h-4 border-2 border-primary-foreground/40 border-t-primary-foreground rounded-full"
                              }
                            ),
                            "Placing Order…"
                          ] }) : `🍬 Place Order — $${cartTotal.toFixed(2)}`
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground text-center", children: "We'll confirm your order and be in touch soon 💝" })
                    ]
                  }
                )
              ] }) }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "shadow-card border-border bg-muted/30 sticky top-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-base text-foreground mb-4", children: "Order Summary" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "space-y-2.5 mb-4 max-h-56 overflow-y-auto",
                    "data-ocid": "order-summary-items",
                    children: cart.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        className: "flex justify-between gap-2 text-sm",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-foreground truncate flex-1 min-w-0", children: [
                            item.productName,
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground ml-1", children: [
                              "×",
                              item.quantity
                            ] })
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-medium shrink-0", children: [
                            "$",
                            (item.unitPrice * item.quantity).toFixed(2)
                          ] })
                        ]
                      },
                      item.productName
                    ))
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { className: "mb-3" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between font-display font-black text-base", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Total" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-primary", children: [
                    "$",
                    cartTotal.toFixed(2)
                  ] })
                ] })
              ] }) }) })
            ] })
          ]
        },
        "details"
      )
    ] })
  ] });
}
export {
  OrderPage as default
};
