import Notfoundpage from "../admin/pages/NotFountPage";
import Dashboard from "../admin/pages/Dashbord";
import Userpage from "../admin/pages/UserPage";
import ProductList from "../admin/pages/ProductList";
import EditProduct from "../admin/pages/EditProduct"
const url = window.location.pathname;

const routes = [
    { path: "/admin", element: <Dashboard /> },
    { path: "/admin/user", element: <Userpage /> },
    { path: "admin/products", element: <ProductList /> },
    { path: "admin/product/:id", element: <EditProduct /> },
    { path: "admin/*", element: <Notfoundpage /> },
  ];

export default routes;