import React from 'react'
import Product from './Product';

const ProductTab = () => {
  return (
    <div className='flex flex-row justify-center items-center'>
      <Product title="Logitech MX Master" idx={0}/>
      <Product title="Apple Pencil (2nd Gen)" idx={1}/>
      <Product title="Zebronics Zeb-transformer" idx={2}/>
      <Product title="Petronics Toad 2D" idx={3}/>
    </div>
  )
}

export default ProductTab