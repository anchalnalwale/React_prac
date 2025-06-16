import React from 'react'

const Price = ({oldPrices,newPrices}) => {
  return (
    <div className='flex flex-col justify-center'>
        <span className='line-through'>{oldPrices}</span>
        <span className='font-bold'>{newPrices}</span>
    </div>
  )
}

export default Price