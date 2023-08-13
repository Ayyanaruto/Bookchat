import { Route, Routes } from "react-router-dom";
import AdminProducts from "../components/AdminProducts";
import AdminProductsDashBoard from "../components/AdminProductsDashboard";
import AdminUpdateProducts from "../components/AdminUpdateForm";
import AdminDelete from "../components/AdminDelete";
import AdminCustOrder from "../components/AdminCustOrder";
import AdminCustOrderDetails from "../components/AdminCustOrderDetails";

interface RouteConfig {
  path: string;
  element:JSX.Element;
}

const routes: RouteConfig[] = [
  {
    path: "/admin",
    element:<AdminProducts />,
  },{
    path:"/admin/products",
    element:<AdminProductsDashBoard/>
  },
  {
    path:"/admin/products/update/:id",
    element:<AdminUpdateProducts/>
  },
  {
    path:"/admin/products/delete/:id",
    element:<AdminDelete/>
  },{
    path:"/admin/customer/orders",
    element:<AdminCustOrder/>
  },
  {
    path:"/admin/customer/orders/:id",
    element:<AdminCustOrderDetails/>
  }
  
];
const routesList: () => JSX.Element[] = () => {
  return routes.map((route, index) => {

    return <Route key={index} path={route.path} element={route.element} />;
  });
};
const Protectedroutes=()=>{
  return (
    
      <Routes>
        {routesList()}
        </Routes>
       
  
  );
}
export default Protectedroutes;