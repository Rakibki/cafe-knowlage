import Header from './components/header/Header'
import Blogs from './components/blogs/Blogs'
import BookMark from './components/bookMarks/BookMarks'

const App = () => {

  return (
    <div>
       <Header />
        <div className='md:flex mt-7 gap-3'>
            <Blogs />
            <BookMark />
        </div>
    </div>
  )
}

export default App