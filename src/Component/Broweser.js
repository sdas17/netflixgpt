import React, { createContext, useEffect } from 'react'
import Header from './Header'
import usemoviewonline from '../utiles/hooks/usemoviewonline'


// Custom hook for easier context usage

const Broweser = () => {
  /* use redux */
  usemoviewonline()

  return (
    <div className="absolute w-screen  px-8  py-7 bg-gradient-to-b from -black z-30">
      <Header />
    </div>
  )
}

export default Broweser