import React from 'react'

export interface Props {
  product: {
    name: string
    image: string
    price: number
    sale: number
  }
}

export const Product: React.FC<Props> = ({ product }) => {
  const { name, image, price, sale } = product
  const priceAfterSale = (price * Number(sale)) / 100

  return (
    <div className="col-3">
      <div
        className="px-[30px] py-10 mb-[30px] rounded-border-radius relative bg-main-bg scale-[95]
      transition-all duration-300 ease-transition-cubic
      hover:scale-100"
      >
        <span
          className="px-5 py-[10px] rounded-border-radius
        absolute -top-5 right-[30px] bg-[#884ffb] text-txt-white"
        >
          {sale}% off
        </span>
        <div className="mb-[10px] rounded-border-radius">
          <img src={image} alt="product" className="max-w-full rounded-border-radius" />
        </div>
        <div className="flex items-center mb-[15px]">
          <p className="flex-[2] text-[1.25rem] capitalize">{name}</p>
          <p className="flex-[3] text-[2.25rem] items-center">
            <span className="mr-[15px]">${priceAfterSale}</span>
            <span className="opacity-80 line-through text-[1.75rem]">${price}</span>
          </p>
        </div>
        <button
          className="w-full p-5 rounded-[8px] text-[1.125rem]
        bg-transparent border border-main-color text-main-color
        transition-all duration-300 ease-in-out
        hover:bg-main-color hover:text-txt-white"
        >
          Add to cart
        </button>
      </div>
    </div>
  )
}