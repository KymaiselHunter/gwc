import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Background from './assets/koa5.jpg'

import Navbar from './components/Navbar'
import Typewriter from './components/Typewriter'
import Showcase from './components/Showcase'
import EBoard from './components/EBoard'

import UploadForm from './components/UploadForm';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='min-h-screen w-screen bg-cover'
      style={{backgroundImage:  `url(${Background})`}}
    >
      <Navbar></Navbar>
      <Main></Main>
    </div>
  )
}

function Main(){
  return(
    <>
      <main className='flex flex-col justify-start items-center w-full  '>
        {/* // py-20 md:py-32 lg:py-40 */}
        
        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 place-items-center'
          style={{height: "60vh"}}
        >
          <Typewriter/>
          {/* <Showcase/> */}
        </div>


        {/* <EBoard/> */}
        <UploadForm></UploadForm>
      </main>
    </>
  );
}



export default App
