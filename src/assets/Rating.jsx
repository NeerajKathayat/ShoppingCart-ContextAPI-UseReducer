import React from 'react'

const Rating = ({rating,onClick}) => {
  return (
    <div>

      {
        [...Array(5)].map((_, i)=>{
               return <span key={i} onClick={()=>onClick(i)} className='cursor-pointer' >
                        {rating > i ? (<i class="fa-solid fa-star"></i>) : (<i class="fa-regular fa-star "></i>)}
               </span>
        })
      }

    </div>
  )
}

export default Rating
