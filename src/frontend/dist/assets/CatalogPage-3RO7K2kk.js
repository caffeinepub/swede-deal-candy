import { c as createLucideIcon, u as useCart, r as reactExports, j as jsxRuntimeExports, a as ue } from "./index-BgLvjk3i.js";
import { u as usePlaceOrder, m as motion, B as Button, C as Card, a as CardContent, b as Badge, S as Separator } from "./proxy-CtOolpFJ.js";
import { C as CircleCheck, T as Trash2, M as Minus, P as Plus, S as ShoppingCart, A as AnimatePresence, L as Label, I as Input } from "./index-Djz4JyCG.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",
      key: "4pj2yx"
    }
  ],
  ["path", { d: "M20 3v4", key: "1olli1" }],
  ["path", { d: "M22 5h-4", key: "1gvqau" }],
  ["path", { d: "M4 17v2", key: "vumght" }],
  ["path", { d: "M5 18H3", key: "zchphs" }]
];
const Sparkles = createLucideIcon("sparkles", __iconNode);
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
    name: "GHIRADRLLY Caramel Milk Chocolate",
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
const PIECE_PRICES = { "14": 0.27 };
const CATEGORIES = [
  "All",
  ...Array.from(new Set(PRODUCTS.map((p) => p.category)))
];
function CatalogPage() {
  const { cart, cartCount, cartTotal, addToCart, updateQty, clearCart } = useCart();
  const [selectedCategory, setSelectedCategory] = reactExports.useState("All");
  const [showCheckout, setShowCheckout] = reactExports.useState(false);
  const [orderSuccess, setOrderSuccess] = reactExports.useState(false);
  const [form, setForm] = reactExports.useState({ name: "", email: "", phone: "" });
  const placeOrder = usePlaceOrder();
  const filtered = selectedCategory === "All" ? PRODUCTS : PRODUCTS.filter((p) => p.category === selectedCategory);
  async function handleSubmitOrder(e) {
    e.preventDefault();
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
      clearCart();
      setForm({ name: "", email: "", phone: "" });
      setShowCheckout(false);
    } catch {
      ue.error("Failed to place order. Please try again.");
    }
  }
  if (orderSuccess) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "max-w-2xl mx-auto px-4 py-24 text-center",
        "data-ocid": "order-success",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { scale: 0.8, opacity: 0 },
            animate: { scale: 1, opacity: 1 },
            transition: { type: "spring", bounce: 0.4 },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-7xl mb-4", children: "🎉" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "mx-auto text-accent mb-4", size: 48 }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-black text-4xl text-foreground mb-3", children: "Order Placed!" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-lg mb-8", children: "Thanks for your sweet order! We'll be in touch soon. 🍬" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  size: "lg",
                  onClick: () => setOrderSuccess(false),
                  className: "font-display font-bold",
                  "data-ocid": "continue-shopping",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { size: 16, className: "mr-2" }),
                    "Keep Shopping"
                  ]
                }
              )
            ]
          }
        )
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden bg-card border-b border-border", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute inset-0 bg-cover bg-center opacity-20",
          style: {
            backgroundImage: "url('/assets/generated/candy-hero.dim_1200x400.jpg')"
          },
          "aria-hidden": "true"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: -20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5 },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-5xl mb-3 select-none", children: "🍬🍭🍫" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display font-black text-5xl sm:text-6xl text-primary tracking-tight mb-3", children: "Sweet Deal Candy" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-xl max-w-xl mx-auto", children: "Hand-picked treats at unbeatable prices — pick your favourites and place an order today!" })
          ]
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col lg:flex-row gap-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "flex flex-wrap gap-2 mb-6",
            "data-ocid": "category-filter",
            children: CATEGORIES.map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => setSelectedCategory(cat),
                className: [
                  "px-4 py-1.5 rounded-full text-sm font-display font-bold border transition-smooth",
                  selectedCategory === cat ? "bg-primary text-primary-foreground border-primary shadow-subtle" : "bg-card text-muted-foreground border-border hover:border-primary/50 hover:text-primary"
                ].join(" "),
                "data-ocid": `filter-${cat.toLowerCase()}`,
                children: cat
              },
              cat
            ))
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4", children: filtered.map((product, i) => {
          const inCart = cart.find((c) => c.productName === product.name);
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { delay: i * 0.035, duration: 0.4 },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Card,
                {
                  className: "shadow-card hover:shadow-lg transition-smooth group border-border bg-card h-full flex flex-col",
                  "data-ocid": `product-${product.id}`,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-4 flex flex-col h-full", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2 mb-3", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-4xl group-hover:scale-110 transition-smooth select-none", children: product.emoji }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Badge,
                        {
                          variant: "secondary",
                          className: "text-xs shrink-0 font-medium",
                          children: product.category
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-sm text-foreground leading-tight mb-1 line-clamp-2 flex-1", children: product.name }),
                    PIECE_PRICES[product.id] && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mb-1", children: [
                      "Piece: $",
                      PIECE_PRICES[product.id].toFixed(2)
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-primary font-black text-xl mb-3", children: [
                      "$",
                      product.price.toFixed(2)
                    ] }),
                    inCart ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "button",
                        {
                          type: "button",
                          onClick: () => updateQty(product.name, -1),
                          className: "flex-1 h-8 rounded-lg bg-muted hover:bg-muted/70 flex items-center justify-center transition-colors duration-200 border border-border",
                          "aria-label": "Decrease quantity",
                          children: inCart.quantity === 1 ? /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { size: 13 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, { size: 13 })
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-black text-sm w-6 text-center text-primary", children: inCart.quantity }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "button",
                        {
                          type: "button",
                          onClick: () => updateQty(product.name, 1),
                          className: "flex-1 h-8 rounded-lg bg-muted hover:bg-muted/70 flex items-center justify-center transition-colors duration-200 border border-border",
                          "aria-label": "Increase quantity",
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 13 })
                        }
                      )
                    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Button,
                      {
                        className: "w-full font-display font-bold text-sm",
                        size: "sm",
                        onClick: () => {
                          addToCart(product.name, product.price);
                          ue.success(`${product.emoji} Added to cart!`, {
                            duration: 1800
                          });
                        },
                        "data-ocid": `add-to-cart-${product.id}`,
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 14, className: "mr-1" }),
                          " Add to Order"
                        ]
                      }
                    )
                  ] })
                }
              )
            },
            product.id
          );
        }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:w-80 shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sticky top-24", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "shadow-card border-border bg-card", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display font-black text-lg text-foreground flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingCart, { size: 20, className: "text-primary" }),
              "Your Order"
            ] }),
            cartCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-primary text-primary-foreground font-bold", children: cartCount })
          ] }),
          cart.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-10", "data-ocid": "empty-cart", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-5xl mb-3", children: "🛒" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm font-medium", children: "Add some sweets to get started!" })
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "space-y-3 mb-4 max-h-64 overflow-y-auto",
                "data-ocid": "cart-items",
                children: cart.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "flex items-center gap-2",
                    "data-ocid": `cart-item-${item.productName.replace(/\s+/g, "-").toLowerCase()}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-foreground truncate", children: item.productName }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
                          "$",
                          item.unitPrice.toFixed(2),
                          " × ",
                          item.quantity,
                          " =",
                          " ",
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-primary font-bold", children: [
                            "$",
                            (item.unitPrice * item.quantity).toFixed(2)
                          ] })
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 shrink-0", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "button",
                          {
                            type: "button",
                            onClick: () => updateQty(item.productName, -1),
                            className: "w-6 h-6 rounded-md bg-muted hover:bg-muted/70 flex items-center justify-center transition-colors duration-200",
                            "aria-label": "Decrease quantity",
                            children: item.quantity === 1 ? /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { size: 10 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, { size: 10 })
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-5 text-center text-xs font-black text-primary", children: item.quantity }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "button",
                          {
                            type: "button",
                            onClick: () => updateQty(item.productName, 1),
                            className: "w-6 h-6 rounded-md bg-muted hover:bg-muted/70 flex items-center justify-center transition-colors duration-200",
                            "aria-label": "Increase quantity",
                            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 10 })
                          }
                        )
                      ] })
                    ]
                  },
                  item.productName
                ))
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { className: "mb-4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between font-display font-black text-lg mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: "Total" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-primary", children: [
                "$",
                cartTotal.toFixed(2)
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                className: "w-full font-display font-bold mb-3",
                onClick: () => setShowCheckout((v) => !v),
                "data-ocid": "toggle-checkout-form",
                children: showCheckout ? "Cancel ✕" : "🍬 Place Order"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: showCheckout && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.form,
              {
                initial: { opacity: 0, height: 0 },
                animate: { opacity: 1, height: "auto" },
                exit: { opacity: 0, height: 0 },
                transition: { duration: 0.25 },
                onSubmit: handleSubmitOrder,
                className: "space-y-3 overflow-hidden",
                "data-ocid": "checkout-form",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Label,
                      {
                        htmlFor: "name",
                        className: "text-xs font-semibold",
                        children: "Your Name"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        id: "name",
                        required: true,
                        value: form.name,
                        onChange: (e) => setForm((f) => ({
                          ...f,
                          name: e.target.value
                        })),
                        placeholder: "Jane Smith",
                        className: "mt-1 h-8 text-sm",
                        "data-ocid": "input-name"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Label,
                      {
                        htmlFor: "email",
                        className: "text-xs font-semibold",
                        children: "Email"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        id: "email",
                        type: "email",
                        required: true,
                        value: form.email,
                        onChange: (e) => setForm((f) => ({
                          ...f,
                          email: e.target.value
                        })),
                        placeholder: "jane@example.com",
                        className: "mt-1 h-8 text-sm",
                        "data-ocid": "input-email"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Label,
                      {
                        htmlFor: "phone",
                        className: "text-xs font-semibold",
                        children: "Phone"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        id: "phone",
                        type: "tel",
                        required: true,
                        value: form.phone,
                        onChange: (e) => setForm((f) => ({
                          ...f,
                          phone: e.target.value
                        })),
                        placeholder: "+1 555 0100",
                        className: "mt-1 h-8 text-sm",
                        "data-ocid": "input-phone"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      type: "submit",
                      className: "w-full font-display font-bold",
                      disabled: placeOrder.isPending,
                      "data-ocid": "submit-order",
                      children: placeOrder.isPending ? "Placing order…" : "✨ Confirm Order"
                    }
                  )
                ]
              },
              "checkout-form"
            ) })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-3 text-center px-2", children: "💡 Whole Yonk Bag: whole bag $5.43 · individual piece $0.27" })
      ] }) })
    ] }) })
  ] });
}
export {
  CatalogPage as default
};
