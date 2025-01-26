import HomePage from "../front/pages/HomePage";
import AboutPage from "../front/pages/AboutPage";
import NotFoundPage from "../front/pages/NotFoundPage";
import ServicesPage from "../front/pages/ServicesPage";

const routes = [
    { path: "/", element: <HomePage /> },
    { path: "/about", element: <AboutPage /> },
    { path: "*", element: <NotFoundPage /> },
    { path: "/services", element: <ServicesPage /> },
  ];

export default routes;


