import React from 'react';
import { BrowserRouter,Route,Routes} from 'react-router-dom';

import Header from './components/Header';
import './styles/App.css'
import routes from './utilities/route';

interface Props  {
  component: JSX.Element;
  path: string;
  exact?: boolean;
}


const routesList:()=>JSX.Element[]= ()=>{
  return routes.map((route,index)=>{
    return <Route key={index} path={route.path} element={route.element} />
  })
}



const App=():JSX.Element=>{
  return (
    <BrowserRouter>
      <Header />
      <div className='App'>
        <Routes>
          {routesList()}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
