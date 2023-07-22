import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import routes from "./utilities/route";
import Protectedroutes from "./components/Admin/utilities/AdminRoutes";
import AdminHeader from "./components/Admin/components/AdminHeader";



const routesList: () => JSX.Element[] = () => {
  return routes.map((route, index) => {
    return <Route key={index} path={route.path} element={route.element} />;
  });
};

const App = (): JSX.Element => {
  return (
    <BrowserRouter >
      <div className="App">
        {window.location.href.includes("admin") ? <AdminHeader/> :
        <Header />}
        <Routes>
          {routesList()}
          </Routes>

      </div>
      <Protectedroutes />
    </BrowserRouter>
  );
};

export default App;
