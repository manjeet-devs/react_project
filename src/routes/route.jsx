import HomePage from "../front/pages/HomePage";
import AboutPage from "../front/pages/AboutPage";
import NotFoundPage from "../front/pages/NotFoundPage";
import ServicesPage from "../front/pages/ServicesPage";
import Product from "../front/pages/Product";
import StaticPage from "../front/pages/StaticPage";

const path = window.location.pathname.replace(/^\//, "");
console.log("Current path:", path);

const seo = [
  { route: "/product/1", url: "new-page" },
  { route: "/product/3", url: "new-page1" },
  { route: "/product/4", url: "new-page2" },
];
const seo2 = [
  { route: "/static/1", url: "static" },
  { route: "/static/2", url: "static1" },
  { route: "/static/3", url: "static2" },
];

let product_url = null;
let static_page_url = null;

seo.forEach((item) => {
  if (item.url === path) {
    product_url = item.url;
  }
});

seo2.forEach((item) => {
  if (item.url === path) {
    static_page_url = item.url;
  }
});

const routes = [
  { path: "/", element: <HomePage /> },
  { path: "/services", element: <ServicesPage /> },
  { path: "/about", element: <AboutPage /> },
  { path: `${product_url}`, element: <Product /> },
  { path: "/product/:id", element: <Product /> }, 
  { path: `${static_page_url}`, element: <StaticPage /> }, 
  { path: "/static/:id", element: <StaticPage /> },
  
  // Dynamic route 
  { path: "*", element: <NotFoundPage /> },
];

export default routes;
