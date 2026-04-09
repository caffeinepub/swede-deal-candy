import { Layout } from "@/components/Layout";
import { Skeleton } from "@/components/ui/skeleton";
import { Toaster } from "@/components/ui/sonner";
import { CartProvider } from "@/context/CartContext";
import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { Suspense, lazy } from "react";

const CatalogPage = lazy(() => import("@/pages/CatalogPage"));
const AdminPage = lazy(() => import("@/pages/AdminPage"));
const OrderPage = lazy(() => import("@/pages/OrderPage"));

const rootRoute = createRootRoute({
  component: () => (
    <CartProvider>
      <Layout>
        <Suspense
          fallback={
            <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {["a", "b", "c", "d", "e", "f"].map((id) => (
                <Skeleton key={id} className="h-48 rounded-xl" />
              ))}
            </div>
          }
        >
          <Outlet />
        </Suspense>
        <Toaster richColors position="top-right" />
      </Layout>
    </CartProvider>
  ),
});

const catalogRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: CatalogPage,
});

const adminRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/admin",
  component: AdminPage,
});

const orderRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/order",
  component: OrderPage,
});

const router = createRouter({
  routeTree: rootRoute.addChildren([catalogRoute, adminRoute, orderRoute]),
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
