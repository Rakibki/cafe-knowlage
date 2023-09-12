import {useState, useEffect} from 'react'
import Blog from '../blog/Blog'

const Books = ({getBlog, getReadTime}) => {
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

  return (
    <div className='order-1 p-4 w-full md:w-2/3 lg: w-2/3'>
      <h1 className='text-xl my-2'>Blog-{blog.length}</h1>
      <div className='w-full'>
        {
          blog.map((item) => <Blog getReadTime={getReadTime} key={item.id} getBlog={getBlog} blog={item} /> )
        }
    </div>
    </div>
  )
}

export default Books