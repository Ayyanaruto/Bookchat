import ProfilePage from "../components/ProfilePage";
import HomePage from "../components/HomePage";
import ProductPage from "../components/ProductPage";
import OrderSuccess from "../components/OrderSuccess";
import OrderPage from "../components/OrderPage";

interface RouteConfig {
    path: string;
    element: JSX.Element;
}

// const ProfilePage = () => {
//   return (
//     <div>
//       <h1>Profile Page</h1>
//     </div>
//   );
// }
// const ProductsPage = () => {
//   return (
//     <div>
//       <h1>Products Page</h1>
//     </div>
//   );
// }


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
    element: <ProfilePage/>
  } 
  ,
  {
    path: '/products/:id',
    element: <ProductPage />
  }
  ,
  {
    path: '/tshirt',
    element: <TshirtPage />
  },
  {
    path: '/success/:id',
    element:<OrderSuccess />
  },{
    path: '/orders',
    element:<OrderPage/>
  }

]
    export default routes;