import HomePage from "../front/pages/HomePage";
import AboutPage from "../front/pages/AboutPage";
import NotFoundPage from "../front/pages/NotFoundPage";
import ServicesPage from "../front/pages/ServicesPage";
import Product from "../front/pages/Product";
import StaticPage from "../front/pages/StaticPage";
import ContactPage from "../front/pages/ContactPage";

const path = window.location.pathname.replace(/^\//, "");
console.log("Current path:", path);

const seo = [
  { route: "/product?product_id=1", url: "new-page" },
  { route: "/product?product_id=2", url: "new-page1" },
  { route: "/product?product_id=3", url: "new-page2" },
];
const seo2 = [
  { route: "/static?static_id=1", url: "static" },
  { route: "/static?static_id=2", url: "static1" },
  { route: "/static?static_id=3", url: "static2" },
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
  { path: "/contact", element: <ContactPage /> },
  { path: static_page_url ? `${static_page_url}` : "/static?static_id=:id", element: <StaticPage /> },
  { path: product_url ? `${product_url}` : "/product?product_id=:id", element: <Product /> }, 
  { path: "*", element: <NotFoundPage /> },
];

export default routes;
