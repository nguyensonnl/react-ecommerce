import Cart from "../pages/client/Cart";
import Catalog from "../pages/client/Catalog";
import Home from "../pages/client/Home";
import NotFound from "../pages/client/NotFound";
import Product from "../pages/client/Product";

import Login from "../pages/client/Login";
import Register from "../pages/client/Register";

import Checkout from "../pages/client/Checkout";
import SearchHeader from "../pages/client/SearchHeader";

import Text from "../components/Text";
import AccountInfo from "../pages/client/AccountInfo";
import AccountOrder from "../pages/client/AccountOrder";
import NewCatalog from "../pages/client/NewCatalog";
import Updating from "../pages/client/Updating";
import Upload from "../components/Upload";

const publicRoutes = [
  { path: "/", page: Home },
  { path: "/cart", page: Cart },
  { path: "/sp/:slug", page: Product },
  { path: "/danh-muc/:cate", page: NewCatalog },
  { path: "*", page: NotFound },
  { path: "/account/login", page: Login },
  { path: "/account/register", page: Register },
  { path: "/checkout", page: Checkout, layout: null },
  { path: "/search-results", page: SearchHeader },
  { path: "/account", page: AccountInfo, private: 1 },
  { path: "/account/orders", page: AccountOrder, private: 1 },
  { path: "/test", page: Text, layout: null },
  { path: "/about", page: Updating },
  { path: "/contact", page: Updating },
  { path: "/upload", page: Upload, layout: null },
];

const privateRoutes = [];

export { privateRoutes, publicRoutes };
