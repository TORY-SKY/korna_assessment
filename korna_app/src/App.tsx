import { useState } from 'react'
import Navbar from "./Navbar/Navbar.tsx"
import BlogPost from "./Components/BlogPost.tsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-black-500'>
        <Navbar />
        <BlogPost />
      </div>
           </>
  )
}

export default App
