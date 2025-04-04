import React from 'react'

const Price = ({oldPrices,newPrices}) => {
  return (
    <div>
        <p>{oldPrices}</p>
        <p>{newPrices}</p>
    </div>
  )
}

export default Price