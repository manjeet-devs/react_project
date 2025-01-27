import HomePage from "../front/pages/HomePage";
import AboutPage from "../front/pages/AboutPage";
import NotFoundPage from "../front/pages/NotFoundPage";
import ServicesPage from "../front/pages/ServicesPage";
// import ProductPage from "../front/pages/ProductPage";
import { Navigate } from "react-router-dom";

const seo = [
  { route: "/product/3", url: "/new-page1" },
  { route: "/product/4", url: "/new-page2" },
];

const routes = [
  { path: "/", element: <HomePage /> },
  { path: "/services", element: <ServicesPage /> },
  { path: "/about", element: <AboutPage /> },
  { path: "/product/:id", element: <AboutPage /> }, // Dynamic route
  { path: "*", element: <NotFoundPage /> },
];

// Add redirects for SEO-friendly URLs
seo.forEach((item) => {
  routes.push({
    path: item.url,
    element: <Navigate to={item.route} />,
  });
});
console.log(routes);

export default routes;
