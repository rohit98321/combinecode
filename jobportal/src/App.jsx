import React from 'react'
import Mainroutes from './routes/Mainroutes'
import Nav from './nav/Nav'

const App = () => {
  return (
    <div className='bg-[#008BFF] w-full h-screen text-white'>
      <Nav/>
      <Mainroutes/>
    </div>
  )
}

export default App