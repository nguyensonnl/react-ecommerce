import Cart from "../pages/clients/Cart";
import Catalog from "../pages/clients/Catalog";
import Home from "../pages/clients/Home";
import NotFound from "../pages/clients/NotFound";
import Product from "../pages/clients/Product";

const publicRoutes = [
  { path: "/", page: Home },
  { path: "/cart", page: Cart },
  { path: "/product", page: Product },
  { path: "/catalog", page: Catalog },
  { path: "*", page: NotFound, layout: null },
];

const privateRoutes = [];

export { privateRoutes, publicRoutes };
