import Notfoundpage from "../admin/pages/NotFountPage";
import Dashboard from "../admin/pages/Dashbord";
import Userpage from "../admin/pages/UserPage";
import ProductList from "../admin/pages/ProductList";
import Prodlist from "../admin/pages/ProdList";
import EditProduct from "../admin/pages/EditProduct"
import ProdEdit from "../admin/pages/ProdEdit"
const url = window.location.pathname;

const routes = [
    { path: "/admin", element: <Dashboard /> },
    { path: "/admin/user", element: <Userpage /> },
    { path: "admin/products", element: <ProductList /> },
    { path: "admin/prodlist", element: <Prodlist /> },
    { path: "admin/product/:id", element: <EditProduct /> },
    { path: "admin/products/:id", element: <ProdEdit /> },
    { path: "admin/*", element: <Notfoundpage /> },
  ];

export default routes;