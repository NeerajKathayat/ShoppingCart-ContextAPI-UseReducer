import React from 'react'
import { CartState } from '../context/Context'
import Rating from './Rating'

const SingleProduct = ({prod}) => {
 
   const { state: { cart }, dispatch } = CartState()    

  return (
    <div className='border border-gray-400 w-[300px] p-3 flex flex-col gap-2'>
        <img src={prod.image} alt="" />
        <div>{prod.name}</div>
        <div>₹{prod.price}</div>
        <div>{prod.fastDelivery ? "Fast Delivery" : "4 days delivery" }</div>
        <Rating rating={prod.ratings} />
        {prod.inStock == 0 ? (
            <button className='bg-[#58A8FF] rounded-md text-white p-2'>Out of Stock</button>
        ):(

             cart.some(p => p.id === prod.id) ? (
              <button className='bg-red-700 rounded-md text-white p-2' onClick={()=>{ dispatch({type:'REMOVE_FROM_CART' , payload:prod }) }}>remove from Cart</button> 
             ) 
             : 
             (
              <button className='bg-[#0069D9] rounded-md text-white p-2' onClick={()=>{ dispatch({type:'ADD_TO_CART' , payload:prod}) }}>Add to Cart</button> 
             )
            
        )}
        
            
    </div>
  )
}

export default SingleProduct
