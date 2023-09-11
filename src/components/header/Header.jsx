import React from 'react'

import profine from "../../assets/images/profile.png"

const Header = () => {
  return (
   <div>
     <div className='flex justify-between py-4 items-center'>
        <div><h1 className='text-3xl font-semibold'>Knowledge Cafe</h1></div>
        <div><img src={profine} alt="" /></div>
     </div>
     <hr />
   </div>
    
  )
}

export default Header