import React from 'react'
import { useEffect } from 'react';
import './App.css';
import { fetchData } from './fetch/fetchData';
import { useState } from 'react';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Bucket from './pages/Bucket';

function App() {

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
      const fetchProductsData = async () => {
          const res = await fetchData();
          setProducts(res);
      }
      fetchProductsData();
  }, [])


  const addToCart = (product) => {
    console.log(cart);
    setCart([...cart, product]);
    console.log(cart);
  }

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home products={products} onAdd={addToCart}/>} />
        <Route path="/bucket" element={<Bucket bucketProducts={cart}/>} />
        {/* <Route path="/item:id" element={<ItemDescription />} /> */}
      </Routes>
    </>
  );
}

export default App;
