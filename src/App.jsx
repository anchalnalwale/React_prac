import React from 'react'
import './App.css'
import Product from './Product'
import { list } from 'postcss';

function App() {
  let options = ["hi-tech" , "durable"];
  
  return (
    <div>
      <Product title="Laptop" price={40000} features={options}/>
    </div>
  )
}

export default App


