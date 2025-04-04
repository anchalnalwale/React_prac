// import React from 'react'

// const Product = ({title,price,features,features2}) => {
//   let styles = {backgroundColor : price>=50000 ? "pink" : null}
//   return (
//     <div style={styles} className='bg-emerald-500 h-32 items-center justify-center rounded m-10'>
//         <h1 className='pt-5 text-2xl'>{title}</h1>
//         <h3>Price : {price}</h3>
//         {price>30000 && <p>Discount of 5%</p>}
//         {price>30000 ? <p>Discount of 5%</p>:null}
//     </div>
//   )
// }

// export default Product

import React from 'react'
import Price from './Price'

const Product = ({title ,idx}) => {
  let oldPrices = ["11,789" , "4,999" , "590" , "20,399"];
  let newPrices = ["10,500" , "3,200" , "450" , "18,999"];
  return (
    <div className='h-34 border-white justify-center bg-emerald-500 my-8 mx-20 items-center pt-5 pl-5 rounded-lg'>
      <h1 className='text-2xl'>{title}</h1>
      <p>Description</p>
      <Price oldPrices={oldPrices[idx]} newPrices={newPrices[idx]}/>
    </div>
  )
}

export default Product