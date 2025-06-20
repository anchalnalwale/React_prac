import React from 'react'

const Price = ({oldPrices,newPrices}) => {
  return (
    <div className='bg-yellow-500 w-[300px] h-10 rounded-b-md flex flex-row gap-3 justify-center mr-5'>
        <span className='line-through text-xl mt-1'>Rs.{oldPrices}</span>
        <span className='font-bold text-xl mt-1'>Rs.{newPrices}</span>
    </div>
  )
}

export default Price