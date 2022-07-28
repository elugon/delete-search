import { set } from 'mongoose';
import React, { useState } from 'react';
import './App.css';
import CardDelete from './components/CardDelete';
import productData from './products.json';
import SearchBar from './components/SearchBar';

function App() {
  const [products, setProducts] = useState(productData);
  
  const handleDelete= (id) =>{

  const filtered=products.filter(ele=>ele._id!==id)
  setProducts(filtered)
  }

  const handleSearch= (searchValue) =>{

    if(searchValue === ''){
      setProducts(productData)
    } else{
    const filtered=products.filter(ele=>ele.name.toLowerCase().includes(searchValue.toLowerCase()))
    setProducts(filtered)
    }}

  return (
    <div className="cart">
      <h1>My shopping cart</h1>
      <SearchBar onSearch={handleSearch} />
      {products.map(elem => {
        return (
          <CardDelete key={elem._id} info={elem} onDelete={handleDelete} />
        )
      })}    </div>
  );
}

export default App;
