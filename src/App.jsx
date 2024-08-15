
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks,setBookmarks]= useState([])
  const [times,setTimes] = useState(0)

  const handleAddToTime =time=>{
    // console.log(time)
    const newTime = times + time;
    // console.log(time,times)
    setTimes(newTime)


  }
  const handleBookmark = blog =>{
    const newBookmarks = [...bookmarks,blog]
    setBookmarks(newBookmarks)
  }



  return (
    <>
      
      <Header></Header>      
      <div className='md:flex p-4 mx-4'>
      <Blogs handleAddToTime={handleAddToTime} handleBookmark={handleBookmark}></Blogs>
      <Bookmarks handleAddToTime={times} bookmarks ={bookmarks}></Bookmarks>
      </div>
    </>
  )
}

export default App
