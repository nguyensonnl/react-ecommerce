import Cart from "../pages/Cart";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Product from "../pages/Product";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Checkout from "../pages/Checkout";
import SearchHeader from "../pages/SearchHeader";
import Info from "../pages/Account/Info";
import Order from "../pages/Account/Order";
import CatalogV2 from "../pages/Catalog/CatalogV2";
import Updating from "../pages/Updating";
import Upload from "../components/Upload";
import CatalogV3 from "../pages/Catalog/CatalogV3";
import CatalogV4 from "../pages/Catalog/CatalogV4";
import CatalogV5 from "../pages/Catalog/CatalogV5";
import English from "../components/English";
import BRK from "../components/BRK";

//import Catalog from "../pages/client/Catalog";

const publicRoutes = [
  // { path: "/", page: Home },
  // { path: "/cart", page: Cart },
  // { path: "/sp/:slug", page: Product },
  // { path: "/c/:cate", page: CatalogV5 },
  { path: "*", page: NotFound },
  // { path: "/account/login", page: Login },
  // { path: "/account/register", page: Register },
  // { path: "/checkout", page: Checkout, layout: null },
  // { path: "/search-results", page: SearchHeader },
  // { path: "/account", page: Info, private: 1 },
  // { path: "/account/orders", page: Order, private: 1 },
  // { path: "/about", page: Updating },
  // { path: "/contact", page: Updating },
  // { path: "/upload", page: Upload, layout: null },
  // { path: "/english", page: English, layout: null },
  { path: "/brk", page: BRK, layout: null },
];

const privateRoutes = [];

export { privateRoutes, publicRoutes };
