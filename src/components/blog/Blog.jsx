import React from 'react'

import PropsType from "prop-types"

const Blog = ({blog}) => {
    const {title, blogImg} = blog;
  return (
    <div className='mb-4 shadow-md p-4 bg-[#fff]'>
        <div><img src={blogImg} alt="" /></div>
        <h2 className='text-2xl font-semibold'>{title}</h2>
    </div>
  )
}

Blog.PropsType = {
    blog: PropsType.object.isRequired
}

export default Blog
