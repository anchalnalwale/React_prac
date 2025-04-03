import React from 'react'

const Product = ({title,price,features,features2}) => {
  let styles = {backgroundColor : price>=50000 ? "pink" : null}
  return (
    <div style={styles} className='bg-emerald-500 h-32 items-center justify-center rounded m-10'>
        <h1 className='pt-5 text-2xl'>{title}</h1>
        <h3>Price : {price}</h3>
        {price>30000 && <p>Discount of 5%</p>}
        {price>30000 ? <p>Discount of 5%</p>:null}
    </div>
  )
}

export default Product