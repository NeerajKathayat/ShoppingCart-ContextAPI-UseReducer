import React, { useEffect, useState } from 'react'
import { CartState } from '../context/Context'
import Rating from './Rating'
import { Link } from 'react-router-dom'
const CartPage = () => {
     const {state:{cart} , dispatch} = CartState()
     console.log(cart.ratings)

     const [total , setTotal] = useState(0);

     useEffect(()=>{
            setTotal(cart.reduce((acc,ele)=>{
              return acc+(Number(ele.price) * ele.qty);
         },0))
     })
  return (
    <div className='px-2 py-3 flex gap-3'>
             <div className='px-10 w-full'>
                     <div className='flex flex-col max-w-[900px] mx-auto  gap-9'>
                     {cart.map((prod)=>{
                        return <div className='flex flex-col gap-4 md:flex-row md:items-center'>
                        <img src={prod.image} className='w-30 h-20' alt={prod.name} />
                        <div className='text-xl font-medium'>{prod.name}</div>
                        <div className='text-xl font-medium'>₹{prod.price}</div>
                        <Rating rating={prod.ratings} />
                      


                        <span onClick={()=>{ dispatch({type:"REMOVE_FROM_CART" , payload:prod})}} className='cursor-pointer'>
                           <i class="fa-solid fa-trash"></i>
                        </span>


                          <select className='p-2 w-40 ' value={prod.qty} onChange={(e)=> { dispatch({type:"CHANGE_CART_QTY" , payload:{id:prod.id, qty:e.target.value}})}}>
                            {
                              [...Array(prod.inStock).keys()].map((ele)=>{
                                return <option key={ele} value={ele+1}>{ele+1}</option>
                          })}
                          
                          </select>

                   </div>
                    })}
                     </div>
             </div>

             <div className='bg-[#343A40] text-white h-screen w-full max-w-[300px]  py-3 px-2 flex flex-col gap-4'>
                 <h1 className='font-bold'>Subtotal <span>({cart.length}) items</span></h1>
                 <p className='font-bold'>Total: ₹  {total}</p>
                 
                   <Link to="/" className='bg-[#0069D9] rounded-md text-white p-2 text-center'>Proceed to Checkout</Link>
             </div>
    </div>
  )
}

export default CartPage
