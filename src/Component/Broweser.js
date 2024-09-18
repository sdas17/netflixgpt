import React, { createContext, useEffect } from 'react'
import Header from './Header'
import {options} from '../utiles/userconstant';

// Custom hook for easier context usage

const Broweser = () => {


  useEffect(()=>{
    fetchApiCalling();
  },[])
  const url = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';

  const fetchApiCalling = async () => {
    try {
      const response = await fetch(url, options); // Replace "url" with the actual URL and "options" with your fetch options
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json(); // Assuming the response is in JSON format
      console.log(data); // Handle the data
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
  

  return (
    <div className="absolute w-screen  px-8  py-7 bg-gradient-to-b from -black z-30">
      <Header/>
    </div>
  )
}

export default Broweser