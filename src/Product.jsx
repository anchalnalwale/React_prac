import React from 'react'
import Price from './Price'
import img1 from './assets/images/img1.jpg'
import img2 from './assets/images/img2.jpg'
import img3 from './assets/images/img3.jpg'
import img4 from './assets/images/img4.webp'

const Product = ({title ,idx}) => {
  let oldPrices = ["11,789" , "4,999" , "590" , "20,399"];
  let newPrices = ["10,500" , "3,200" , "450" , "18,999"];
  let description = [
    ["8,000 DPI"],
    ["Intuitive Surface"],
    ["Designed for iPad Pro"],
    ["Wireless"],
  ];
  let images = [
    img1,
    img2,
    img3,
    img4,
  ];

  return (
    <div className='flex flex-col bg-emerald-500 mx-5 my-5 pt-5 pl-5 rounded-lg justify-center items-center w-[300px] gap-4'>
      <h1 className='text-2xl pr-5'>{title}</h1>
       <img
        src={images[idx]}
        alt={title}
        className="w-[200px] h-[150px] rounded shadow-md"
      />
      <ul>{description[idx]}</ul>
      <Price oldPrices={oldPrices[idx]} newPrices={newPrices[idx]}/>
    </div>
  )
}

export default Product