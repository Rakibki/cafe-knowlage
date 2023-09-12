import React from 'react'

import { FaBookmark } from 'react-icons/fa';
import PropsType from "prop-types"

const Blog = ({blog, getBlog, getReadTime}) => {
    const {title, blogImg, authorImg, author, readingTime, hashtags, postDate} = blog;
  return (
    <div className='mb-6 shadow-md p-4 bg-[#fff]'>
        <div><img className='rounded-md' src={blogImg} alt="" /></div>
        <div className='flex justify-between my-3'>
            <div className='flex gap-3 items-center'>
                <div className='w-14'><img className='w-full rounded-full' src={authorImg} alt="" /></div>
                <div>
                    <h1 className='text-xl font-semibold'>{author}</h1>
                    <p className='text-gray-400 text-sm'>{postDate}</p>
                </div>
            </div>
            <div className='flex items-center gap-3'>
                <span className='text-[#11111199] font-medium'>{readingTime} minute read</span>
                <button onClick={() => getBlog(blog)} className='text-xl'><FaBookmark /></button> 
            </div>
        </div>
        <div className=' my-3'>{hashtags.map((item, index) => <span key={index} className='mr-2 font-semibold text-[#11111199]'>#{item}</span>)}</div>
        <h2 className='text-2xl font-semibold'>{title}</h2>
        <button onClick={() => getReadTime(readingTime)} className='text-[#6047EC] font-extrabold underline text-sm my-3'>Mark as read</button>
    </div>
  )
}

Blog.PropsType = {
    blog: PropsType.object.isRequired
}

export default Blog
