import React from 'react'
import MoviewList from './MoviewList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
    const moviewCard = useSelector((store) => store.movies)
    console.log(moviewCard);


    return (
        <div>
            <MoviewList tittle={"Now Playing"} movies={moviewCard.nowPlayingMovies} />
            <MoviewList title={"Now Playing"} movies={moviewCard.nowPlayingMovies} />
            <MoviewList title={"Trending"} movies={moviewCard.nowPlayingMovies} />
            <MoviewList title={"Popular"} movies={moviewCard.popularMovies} />
            <MoviewList
                title={"Upcoming Movies"}
                movies={moviewCard.nowPlayingMovies}
            />
            <MoviewList title={"Horror"} movies={moviewCard.nowPlayingMovies} />
        </div>
    )
}

export default SecondaryContainer