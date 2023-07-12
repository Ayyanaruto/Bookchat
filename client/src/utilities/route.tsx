import LoginStatus from "./LoginStatus";
interface RouteConfig {
    path: string;
    element: JSX.Element;
}

const ProfilePage = () => {
  return (
    <div>
      <h1>Profile Page</h1>
    </div>
  );
}
const ProductsPage = () => {
  return (
    <div>
      <h1>Products Page</h1>
    </div>
  );
}

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
}

const TshirtPage = () => {
  return (
    <div>
      <h1>Tshirt Page</h1>
    </div>
  );
}
const routes:RouteConfig[]=[
    {
        path:'/',
        element:<HomePage />
    },
  {
    path: '/profile',
    element: <LoginStatus />
  }
  ,
  {
    path: '/products',
    element: <ProductsPage />
  }
  ,
  {
    path: '/tshirt',
    element: <TshirtPage />
  }]
    export default routes;