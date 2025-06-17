import React from 'react'

const Price = ({oldPrices,newPrices}) => {
  return (
    <div className='bg-yellow-500 w-[300px] h-8 rounded-lg flex flex-row gap-3 justify-center mr-5'>
        <span className='line-through'>Rs.{oldPrices}</span>
        <span className='font-bold'>Rs.{newPrices}</span>
    </div>
  )
}

export default Price