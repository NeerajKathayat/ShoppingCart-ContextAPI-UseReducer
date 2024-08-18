import React, { useState } from 'react'
import Filter from './Filter'
import SingleProduct from './SingleProduct'
import { CartState } from '../context/Context'

const Home = () => {
      
  const {state:{ products}, productState: {sort,byFastDelivery,byStock,byRating,searchQuery} } = CartState()
  
  console.log(products)
  console.log(byStock) 

  const TransformProducts = () =>{
     let sortedProducts = products;

     if(sort){
       sortedProducts = sortedProducts.sort((a,b)=>{
           return sort === "lowToHigh" ? a.price - b.price : b.price - a.price
       });

     }

     if(!byStock){
       sortedProducts = sortedProducts.filter((ele)=>{
        return ele.inStock !== 0 ? ele : ''
       })
     }




     if(byFastDelivery){
       sortedProducts = sortedProducts.filter((ele)=>{
            return ele.fastDelivery === true ? ele : '';
       })
     }

     if(byRating){
      sortedProducts = sortedProducts.filter((ele)=> ele.ratings >= byRating
      )
     }

     if(searchQuery){
      sortedProducts=sortedProducts.filter((ele)=>{
        return ele.name.toLowerCase().includes(searchQuery)
      })
     }

     console.log("p ", sortedProducts )


     return sortedProducts
  }

  return (
    <div className='flex gap-9 justify-between mt-3'>
         <div>
            <Filter/> 
         </div>

         <div className='flex gap-8 flex-wrap'>
         {TransformProducts().map((prod)=>{
           return <SingleProduct prod={prod} />
         })}
         </div>
    </div>
  )
}

export default Home
