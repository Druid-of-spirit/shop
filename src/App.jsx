import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import "./style/base.scss"
import Account from './pages/Account';
import Address from './pages/Address';
import Basket from './pages/Basket';
import Main from './pages/Main';
import Order from './pages/Order';
import Stocks from './pages/Stocks';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/account" element={<Account />} />
        <Route path="/address" element={<Address />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/order" element={<Order />} />
        <Route path="/stocks" element={<Stocks />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
