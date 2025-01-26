import HomePage from "../front/pages/HomePage";
import AboutPage from "../front/pages/AboutPage";
import NotFoundPage from "../front/pages/NotFoundPage";
import ServicesPage from "../front/pages/ServicesPage";

const routes = [
    { path: "/", element: <HomePage /> },
    { path: "/services", element: <ServicesPage /> },
    { path: "/about", element: <AboutPage /> },
    { path: "/product/:id", element: <AboutPage /> },
    { path: "*", element: <NotFoundPage /> },
  ];

export default routes;


