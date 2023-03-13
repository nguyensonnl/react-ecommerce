import Cart from "../pages/clients/Cart";
import Catalog from "../pages/clients/Catalog";
import Home from "../pages/clients/Home";
import NotFound from "../pages/clients/NotFound";
import Product from "../pages/clients/Product";
import Login from "../pages/clients/Auth/Login";
import Register from "../pages/clients/Auth/Register";
import Checkout from "../pages/clients/Checkout";
import SearchHeader from "../pages/clients/SearchHeader";
import Account from "../pages/clients/Account";

const publicRoutes = [
  { path: "/", page: Home },
  { path: "/cart", page: Cart },
  { path: "/product/:id", page: Product },
  { path: "/catalog/:cate", page: Catalog },
  { path: "*", page: NotFound, layout: null },
  { path: "/account/login", page: Login },
  { path: "/account/register", page: Register },
  { path: "/checkout", page: Checkout, layout: null },
  { path: "/search/:searchProduct", page: SearchHeader },
  { path: "/account", page: Account, private: 1 },
];

const privateRoutes = [];

export { privateRoutes, publicRoutes };
