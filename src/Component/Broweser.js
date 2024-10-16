import React, { createContext, useEffect } from 'react'
import Header from './Header'
import usemoviewonline from '../utiles/hooks/usemoviewonline'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import usePopularMovies from '../utiles/hooks/usePopularMovies'
import GptSearch from './GptSearch'
import { useSelector } from 'react-redux'

// Custom hook for easier context usage

const Broweser = () => {
  /* use redux */
  usemoviewonline()
  //popularmoview
  usePopularMovies()
  let gptSearchDisable = useSelector((store) => store.gpt.gptSearch);
  return (
    <div className="absolute w-screen  px-8  py-7 bg-gradient-to-b from -black z-30">
      <Header />
      {
        gptSearchDisable ? (<GptSearch />) : (
          <>
            <MainContainer />
            <SecondaryContainer />
          </>
        )
      }
    </div>
  )
}

export default Broweser