import React, { createContext, useEffect } from 'react'
import Header from './Header'
import usemoviewonline from '../utiles/hooks/usemoviewonline'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import usePopularMovies from '../utiles/hooks/usePopularMovies'


// Custom hook for easier context usage

const Broweser = () => {
  /* use redux */
  usemoviewonline()
  //popularmoview
  usePopularMovies()

  return (
    <div className="absolute w-screen  px-8  py-7 bg-gradient-to-b from -black z-30">
      <Header />
      <MainContainer />
      <SecondaryContainer />

      {/* 
      main container
       --video backgroudn
       --video title
       seconday container
       --moview list *n
       --card *n
      
      
      */}
    </div>
  )
}

export default Broweser