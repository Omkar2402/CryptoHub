import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import CoinPage from './Pages/CoinPage';
import CryptoContext from './CryptoContext';
import 'react-alice-carousel/lib/alice-carousel.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <CryptoContext>
    <Routes>
      <Route path="/" element = {<App/>}/>
      <Route path='/homepage' element = {<HomePage/>}/>
      <Route path='/coins/:id' element = {<CoinPage/>}/>
    </Routes>
    </CryptoContext>
 
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

