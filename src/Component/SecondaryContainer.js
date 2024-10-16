import React from 'react'
import MoviewList from './MoviewList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
    const moviewCard = useSelector((store) => store.movies)


    return (
        moviewCard.nowPlayingMovies && (
            <div className="bg-black w-100% ">
                <div className=" mt-0 -mt-08   pl-20 relative z-20 ">
                    <MoviewList tittle={"Now Playing"} movies={moviewCard.nowPlayingMovies} />
                    <MoviewList tittle={"Trending"} movies={moviewCard.nowPlayingMovies} />
                    <MoviewList tittle={"Popular"} movies={moviewCard.PopularMovies} />
                    <MoviewList
                        tittle={"Upcoming Movies"}
                        movies={moviewCard.nowPlayingMovies}
                    />
                    <MoviewList tittle={"Horror"} movies={moviewCard.nowPlayingMovies} />
                </div>
            </div>
        )


    )
}

export default SecondaryContainer