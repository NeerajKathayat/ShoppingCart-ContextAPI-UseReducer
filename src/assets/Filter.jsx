import React, { useState } from 'react'
import Rating from './Rating'
import { CartState } from '../context/Context'
const Filter = () => {
   const {productDispatch , productState:{sort,byFastDelivery,byStock,byRating}} =CartState()
  return (
    <div className='bg-[#343A40] text-white px-6 py-6 flex flex-col gap-4 w-[260px] min-h-screen'>
          <h1 className='text-3xl'>Filter Products</h1>

          <div>
          <input onChange={()=> productDispatch({type:"SORT_BY_PRICE" , payload:"lowToHigh"}) } checked={sort === "lowToHigh" ? true : false}  type="radio" name="sort" id="" />
             Ascending
          </div>

          <div>
          <input onChange={()=> productDispatch({type:"SORT_BY_PRICE" , payload:"HighTolow"}) } checked={sort === "HighTolow" ? true : false}  type="radio" name="sort" id="" />
            Descending
          </div>

          <div>
             <input onChange={()=> productDispatch({type:"FILTER_BY_STOCK"})} checked={byStock}   type="checkbox" name="" id="" />
             Include Out of Stock
          </div>

          <div>
             <input onChange={()=> productDispatch({type:"FAST_DELIVERY_ONLY"})} checked={byFastDelivery} type="checkbox" name="" id="" />
              Fast Delivery Only
          </div>

          <div className='flex gap-1'>
            <span>Rating:</span>
             <Rating rating={byRating} onClick={(i)=>{productDispatch({type:"FILTER_BY_RATING" , payload: i+1})}} />
          </div>

          <button  onClick={() =>
          productDispatch({
            type: "CLEAR_FILTERS",
          })
        } className='bg-white text-black p-3 rounded-md max-w-[500px]'>Clear Filters</button>
    </div>
  )
}

export default Filter
