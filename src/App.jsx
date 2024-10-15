
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
const [bookmarks, setBookmarks]=useState([]);

const handleBookmarks= blog =>{
  // console.log('bookmark adding soon')
  // console.log(blog)
  const newBookmarks=[...bookmarks, blog]
  setBookmarks(newBookmarks)
}
  return (
    <>
   
    <Header></Header>

    <main className='md:flex ' >
      <Blogs handleBookmarks={handleBookmarks}></Blogs>
      <Bookmarks bookmarks={bookmarks} ></Bookmarks>
    </main>
    
    </>
  )
}

export default App
