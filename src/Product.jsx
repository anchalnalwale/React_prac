import React from 'react'

const Product = ({title,price,features,features2}) => {
  return (
    <div className='bg-emerald-300 h-32 w-48 items-center justify-center rounded'>
        <h1 className='pt-5 text-2xl'>{title}</h1>
        <h3>Price : {price}</h3>
        {price>30000 && <p>Discount of 5%</p>}
        {price>30000 ? <p>Discount of 5%</p>:null}
    </div>
  )
}

export default Product