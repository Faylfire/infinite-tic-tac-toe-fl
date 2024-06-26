import React from 'react'
import Game from './components/Game'
import Footer from './components/Footer'

const App = function(){

  return (
    <div className='bg-gray-400 w-full h-screen flex flex-col justify-between'>
      <Game />
      <Footer />
    </div>

  )
}

export default App