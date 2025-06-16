import React from 'react'

const Price = ({oldPrices,newPrices}) => {
  // let oldStyles = {
  //   TextDecorationLine : "line-through",
  // };
  // let newStyles = {
  //   fontWeight : "bold",
  // };
  return (
    <div className='justify-center'>
        <span className='line-through'>{oldPrices}</span>
        &nbsp;&nbsp;&nbsp;
        <span className='font-bold'>{newPrices}</span>
    </div>
  )
}

export default Price