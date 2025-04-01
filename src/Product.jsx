import React from 'react'

const Product = ({title,price,features,features2}) => {
  console.log(features);
  console.log(features2);
  return (
    <div className='bg-emerald-300 h-24 w-48 items-center justify-center rounded'>
        <h1 className='pt-5 text-2xl'>{title}</h1>
        <h3>{price}</h3>
        <p>{features}</p>
        <p>{features2.b}</p>
    </div>
  )
}

export default Product