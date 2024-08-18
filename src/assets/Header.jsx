import React from 'react'
import {Link} from 'react-router-dom'
import { CartState } from '../context/Context'
const Header = () => {
    const {state:{cart} , dispatch , productDispatch} =  CartState()

  
  return (
    <div className='bg-[#343A40] flex justify-around p-4'>
      <div className='text-white text-2xl font-semibold'>
        Shopping Cart
      </div>

      <input type="text" onChange={(e)=>{productDispatch({type:"FILTER_BY_SEARCH", payload: e.target.value})}}  placeholder='Search a Product..' className='h-9 p-2 w-[300px] rounded-lg' />

      <div className='bg-[#31ad4c] hover:bg-[#218838] text-white flex gap-1 py-3 px-4 rounded-lg font-semibold items-center cursor-pointer relative group'>
        <i class="fa-solid fa-cart-shopping text-[20px]"></i>
        <span className="text-xs">({cart.length})</span>
        <i class="fa-solid fa-caret-down ml-1"></i>

        {cart.length == 0 ?
         (
            <div className='bg-white p-5 text-black absolute top-9 right-6 hidden group-hover:flex flex-col gap-3 w-[300px]'>Cart is Empty!! </div>
         )  

         :  
         (
          <div className='bg-white p-5 text-black absolute top-9 right-6 hidden group-hover:flex flex-col gap-3 w-[300px]'>
          <div className='flex flex-col gap-4'>
          {cart.map((prod) => {
           return <div key={prod.id} className='flex justify-between'>
              <div className='flex gap-4'>
              <img src={prod.image} className='rounded-full w-9 h-9' alt={prod.name} />
              <div className='flex flex-col gap-1'>
                <div className='text-xs'>{prod.name}</div>
                <div className='text-xs'>₹{prod.price}</div>
              </div>
              </div>

              <i class="fa-solid fa-trash hover:text-red-700" onClick={()=>{ dispatch({type:"REMOVE_FROM_CART" , payload:prod})}} ></i>

            </div>
          })}
          </div>

          <Link to="/Cart" className='bg-[#0069D9] rounded-md text-white text-center p-2'>Go to Cart</Link>

        </div>
         )
      }

      </div>


    </div>
  )
}

export default Header
