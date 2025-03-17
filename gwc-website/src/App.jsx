import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Background from './assets/koa5.jpg'

import Navbar from './components/Navbar'

import './Typewriter.css'

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
      <main className='flex flex-col justify-start items-center w-full px-6 
      py-20 md:py-32 lg:py-40
      '>
        
        <div className='grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 gap-8 place-items-center'>
          <div className='typewriter flex flex-col'>
            <div className='h'>
              <p id='greeting-girls-who'>Girls Who</p>
            </div>

            <div>
              <p id='greeting-code'>Code</p>
            </div>
            
            <div>
              <p id='greeting-hunter'>@HUNTER</p>
            </div>
          </div>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="w-80 h-80" alt="React logo"  />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          {/* <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button> */}
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </main>
    </>
  );
}


export default App
