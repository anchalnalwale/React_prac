import React from 'react'
import Product from './Product';

const ProductTab = () => {
  return (
    <div className='flex flex-wrap justify-center items-center gap-6'>
      <Product title="Logitech MX Master" idx={0}/>
      <Product title="Apple Pencil (2nd Gen)" idx={1}/>
      <Product title="Zeb-transformer" idx={2}/>
      <Product title="Petronics Toad 2D" idx={3}/>
    </div>
  )
}

export default ProductTab