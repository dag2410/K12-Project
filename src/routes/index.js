import NoFooterLayout from "@/layouts/NoFooterLayout";
import NoHeaderLayout from "@/layouts/NoHeaderLayout";
import config from "../config";
import Home from "../pages/Home";
import NotFound from "../pages/NotFoundPage";
import ProductDetail from "../pages/ProductDetail";
import Products from "../pages/Products";
import RegisterPage from "@/auth/RegisterPage";
import LoginPage from "@/auth/LoginPage";
import Users from "@/pages/Users";
import Profile from "@/pages/Profile";

const routes = [
  {
    path: config.routes.home,
    component: Home,
  },
  {
    path: config.routes.products,
    component: Products,
    layout: NoFooterLayout,
  },
  {
    path: config.routes.productDetail,
    component: ProductDetail,
    layout: NoHeaderLayout,
  },
  {
    path: config.routes.notFound,
    component: NotFound,
    layout: null,
  },
  {
    path: config.routes.register,
    component: RegisterPage,
    layout: null,
  },
  {
    path: config.routes.login,
    component: LoginPage,
    layout: null,
  },
  {
    path: config.routes.users,
    component: Users,
    protected: true,
    layout: null,
  },
  {
    path: config.routes.profile,
    component: Profile,
  },
];
export default routes;
