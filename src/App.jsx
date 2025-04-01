import React from 'react'
import './App.css'
import Product from './Product'

function App() {
  let options = ["hi-tech" , "durable"];
  let options2 = {a:"hi-tech" , b:"durable"};
  return (
    <div>
      <Product title="Laptop" price={30000} features={options} features2={options2}/>
    </div>
  )
}

export default App


