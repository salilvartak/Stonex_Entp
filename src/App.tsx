import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { 
  createBrowserRouter, 
  RouterProvider, 
  Outlet, 
  ScrollRestoration 
} from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Products from "./pages/Products";
import CalcitePowder from "./pages/products/CalcitePowder";
import DolomitePowder from "./pages/products/DolomitePowder";
import QuartzPowder from "./pages/products/QuartzPowder";
import QuartzGrits from "./pages/products/QuartzGrits";
import DolomiteGrits from "./pages/products/DolomiteGrits";
import Pebble from "./pages/products/Pebble";
import CoatedCalcitePowder from "./pages/products/CoatedCalcitePowder";
import CoatedDolomitePowder from "./pages/products/CoatedDolomitePowder";
import Infrastructure from "./pages/Infrastructure";
import Contact from "./pages/Contact";
import ProductApplications from "./pages/ProductApplications";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();


const RootLayout = () => (
  <TooltipProvider>
    <Toaster />
    <Sonner />
    <ScrollRestoration /> 
    <Outlet />
  </TooltipProvider>
);


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Index /> },
      { path: "/about", element: <About /> },
      { path: "/products", element: <Products /> },
      { path: "/products/calcite-powder", element: <CalcitePowder /> },
      { path: "/products/dolomite-powder", element: <DolomitePowder /> },
      { path: "/products/quartz-powder", element: <QuartzPowder /> },
      { path: "/products/quartz-grits", element: <QuartzGrits /> },
      { path: "/products/dolomite-grits", element: <DolomiteGrits /> },
      { path: "/products/pebble", element: <Pebble /> },
      { path: "/products/coated-calcite", element: <CoatedCalcitePowder /> },
      { path: "/products/coated-dolomite", element: <CoatedDolomitePowder /> },
      { path: "/products/:productId/applications", element: <ProductApplications /> }, // New Route for Applications
      { path: "/infrastructure", element: <Infrastructure /> },
      { path: "/contact", element: <Contact /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>
);

export default App;