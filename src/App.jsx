// import React from 'react'
// import './App.css'
// import Product from './Product'
// import { list } from 'postcss';

// function App() {
//   let options = ["hi-tech" , "durable"];
  
//   return (
//     <div>
//       <Product title="Laptop" price={40000} features={options}/>
//       <Product title="TV" price={50000} features={options}/>
//       <Product title="Phone" price={25000} features={options}/>
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import './App.css'
// import MsgBox from './MsgBox'

// const App = () => {
//   return (
//     <>
//       <MsgBox username="Anchal" textcolor="pink"/>
//       <MsgBox username="Abhinav" textcolor="yellow"/>
//     </>
//   )
// }

// export default App

import React from 'react'
import Product from './Product'

const App = () => {
  return (
    <>
      <Product title="Logitech MX Master" idx="0"/>
      <Product title="Apple Pencil (2nd Gen)" idx="1"/>
      <Product title="Zebronics Zeb-transformer" idx="2"/>
      <Product title="Petronics Toad 2D" idx="3"/>
    </>
  )
}

export default App


