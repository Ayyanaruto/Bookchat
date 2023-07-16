import { Route, Routes } from "react-router-dom";
import AdminProducts from "../components/AdminProducts";


interface RouteConfig {
  path: string;
  element:JSX.Element;
}

const routes: RouteConfig[] = [
  {
    path: "/admin",
    element:<AdminProducts />,
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