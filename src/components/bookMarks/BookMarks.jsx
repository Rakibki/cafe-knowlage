import React from 'react'
import SingleBookMark from '../simgleBookMark/SingleBookMark'

const BookMarks = ({bookMarksList, readTime}) => {
  return (
  <div className='order-2 md:w-1/3 bg-[#fff] shadow-lg p-4 mt-11'>
    <div className='p-4 bg-[#6047ec1a]'>
        <h1 className='text-md text-center font-semibold text-[#6047EC]'>Spent time on read : {readTime} min</h1>
    </div>
      <h1 className='text-xl my-2 mb-3 text-center'>BookMarks: {bookMarksList.length}</h1>
        {
            bookMarksList.map((item) => <SingleBookMark key={item.id} item={item} />)
        }
  </div>
 
  )
}

export default BookMarks