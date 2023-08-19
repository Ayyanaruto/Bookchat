import { Route, Routes } from "react-router-dom";
import AdminProducts from "../components/AdminProducts";
import AdminProductsDashBoard from "../components/AdminProductsDashboard";
import AdminUpdateProducts from "../components/AdminUpdateForm";
import AdminDelete from "../components/AdminDelete";
import AdminCustOrder from "../components/AdminCustOrder";
import AdminCustOrderDetails from "../components/AdminCustOrderDetails";
import AdminAuth from "../components/AdminAuth";
import AdminLogin from "../components/AdminLogin";

interface RouteConfig {
  path: string;
  element: JSX.Element;
}

const routes: RouteConfig[] = [
  {
    path: "/admin",
    element: <AdminProducts />,
  },
  {
    path: "/admin/products",
    element: <AdminProductsDashBoard />,
  },
  {
    path: "/admin/products/update/:id",
    element: <AdminUpdateProducts />,
  },
  {
    path: "/admin/products/delete/:id",
    element: <AdminDelete />,
  },
  {
    path: "/admin/customer/orders",
    element: <AdminCustOrder />,
  },
  {
    path: "/admin/customer/orders/:id",
    element: <AdminCustOrderDetails />,
  },
  {
    path: "/test",
    element: <AdminAuth />,
  },
  
];
const routesList: () => JSX.Element[] = () => {
  return routes.map((route, index) => {
    return <Route key={index} path={route.path} element={route.element} />;
  });
};
const Routers = () => {
  return <Routes>{routesList()}</Routes>;
};

const ProtectedRoutes = () => {
  return (
    <AdminAuth>
      <Routers />
    </AdminAuth>
  );
};

export default ProtectedRoutes;
