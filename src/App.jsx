import { set } from 'mongoose';
import React, { useState } from 'react';
import './App.css';
import productData from './products.json';

function App() {
  const [products, setProducts] = useState(productData);
  
  const handleDelete= (id) =>{

  const filtered=products.filter(ele=>ele._id!==id)
  setProducts(filtered)
  }

  const handleSearch= (e) =>{

    if(e.target.value === ''){
      setProducts(productData)
    } else{
    const filtered=products.filter(ele=>ele.name.toLowerCase().includes(e.target.value.toLowerCase()))
    setProducts(filtered)
    }}

  return (
    <div className="cart">
      <h1>My shopping cart</h1>
      <input type="text" placeholder='Search' onChange={(e)=>handleSearch(e)}></input>

      {products.map(ele=>{return (<div key={ele._id}>
      <p>{ele.name}</p>
      <button onClick={()=>handleDelete(ele._id)}>Delete</button>
      </div>)} )}

    </div>
  );
}

export default App;
