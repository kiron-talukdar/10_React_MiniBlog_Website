
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTimg] = useState(0)


  const handleBookmarks = blog => {
    // console.log('bookmark adding soon')
    // console.log(blog)
    const newBookmarks = [...bookmarks, blog]
    setBookmarks(newBookmarks)
  }

  const handleMarkAsRead = time => {
    // console.log('making as read', time)
    const newReadingTime=readingTime+time;
    setReadingTimg(newReadingTime);
  }




  return (
    <>

      <Header></Header>

      <main className='md:flex ' >
        
        <Blogs handleBookmarks={handleBookmarks} handleMarkAsRead={handleMarkAsRead}></Blogs>
        
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime} ></Bookmarks>
      </main>

    </>
  )
}

export default App
