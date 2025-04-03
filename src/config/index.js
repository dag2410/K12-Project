const config = {
  routes: {
    home: "/",
    products: "/products",
    productDetail: "/products/:slug",
    register: "/register",
    login: "/login",
    users: "/users",
    profile: "/p/:username",
    notFound: "*",
  },
};
export default config;
