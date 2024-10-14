import React from 'react'
import { useSelector } from 'react-redux'
import Videotitle from './videoTitle';
import VideoBackground from './videoBackground';


const MainContainer = () => {
    const movies = useSelector((store) => store.movies?.nowPlayingMovies);

    if (!movies) return;

    const mainMovie = movies[0];
    console.log(mainMovie);
    const { original_title, overview, id } = mainMovie;


    return (
        <>
            <Videotitle title={original_title} overview={overview} />
            <VideoBackground moviewId={id} />

        </>
    )
}

export default MainContainer