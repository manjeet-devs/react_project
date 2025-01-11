import HomePage from "../front/pages/HomePage";
import AboutPage from "../front/pages/AboutPage";
import NotFoundPage from "../front/pages/NotFoundPage";

const routes = [
    { path: "/", element: <HomePage /> },
    { path: "/about", element: <AboutPage /> },
    { path: "*", element: <NotFoundPage /> },
  ];

export default routes;

