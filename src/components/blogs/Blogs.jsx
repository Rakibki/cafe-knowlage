import {useState, useEffect} from 'react'
import Blog from '../blog/Blog'

const Books = () => {
    const [blog, setBlog] = useState([])

    useEffect(() => {
      try {
        fetch('blog.json')
        .then((res) => res.json())
        .then((data) => setBlog(data))
      }catch (e) {
        console.log(e);
      }
    }, [])
    console.log(blog);

  return (
    <div className='md:w-2/3'>
        <h1>blogs: {blog.length}</h1>
        {
          blog.map((item) => <Blog key={item.id} blog={item} /> )
        }
    </div>
  )
}

export default Books