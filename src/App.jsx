import Header from './components/header/Header'
import Blogs from './components/blogs/Blogs'
import BookMark from './components/bookMarks/BookMarks'
import { useState } from 'react'

const App = () => {

  const [bookMarksList, setBookMarksList] = useState([])
  const [readTime, setReadTime] = useState(0)

  const getBlog = (blog) => {
    setBookMarksList([...bookMarksList, blog])
  }

  const getReadTime = (time) => {
    setReadTime(readTime + time)
  }

  return (
    <div className='md:px-4 px-4 lg:mx-auto max-w-6xl'>
       <Header />
        <div className=' md:flex lg:flex mt-7 item-center gap-2'>
            <BookMark readTime={readTime} bookMarksList={bookMarksList} />
            <Blogs className="bg-red-500" getReadTime={getReadTime} getBlog={getBlog} />
        </div>
    </div>
  )
}

export default App