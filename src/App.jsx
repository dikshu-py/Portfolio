import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import About from "./Components/Aboutme.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className=" bg-gray-100 flex  flex-col items-center justify-center px-6 overflow-auto">
      {/* Full-width Container */}
      

      <About/>

      </div>
      
    </>
  )
}

export default App
