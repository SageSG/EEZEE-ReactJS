import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Suspense fallback={(<div></div>)}>
      <BrowserRouter>
      <Routes>
        <Route path="/" element = {<App/>}/>
        <Route path="brands" element = {<App/>}/>
        <Route path="products" element = {<App/>}>
        <Route path=":productid" element = {<App/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </Suspense>
  </React.StrictMode>
);