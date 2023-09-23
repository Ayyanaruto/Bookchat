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
  element: any;
}

const routes: RouteConfig[] = [
  {
    path: "/admin",
    element: (
      <AdminAuth>
        <AdminProducts />
      </AdminAuth>
    ),
  },
  {
    path: "/admin/products",
    element: (
      <AdminAuth>
        <AdminProductsDashBoard />
      </AdminAuth>
    ),
  },
  {
    path: "/admin/products/update/:id",
    element: (
      <AdminAuth>
        <AdminUpdateProducts />
      </AdminAuth>
    ),
  },
  {
    path: "/admin/products/delete/:id",
    element: (
      <AdminAuth>
        <AdminDelete />
      </AdminAuth>
    ),
  },
  {
    path: "/admin/customer/orders",
    element: (
      <AdminAuth>
        <AdminCustOrder />
      </AdminAuth>
    ),
  },
  {
    path: "/admin/customer/orders/:id",
    element: (
      <AdminAuth>
        <AdminCustOrderDetails />
      </AdminAuth>
    ),
  },
  {
    path: "/admin/login",
    element:
    
    <AdminLogin />
    ,
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
  return <Routers />;
};

export default ProtectedRoutes;
