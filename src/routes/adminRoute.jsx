import Notfoundpage from "../admin/pages/NotFountPage";
import Dashboard from "../admin/pages/Dashbord";
import Userpage from "../admin/pages/UserPage";

const routes = [
    { path: "/admin", element: <Dashboard /> },
    { path: "/admin/user", element: <Userpage /> },
    { path: "admin/*", element: <Notfoundpage /> },
  ];

export default routes;