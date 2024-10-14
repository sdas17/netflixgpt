import React from 'react'
import MoviewCard from './MoviewCard'

const MoviewList = ({ tittle, movies }) => {
    console.log(tittle, movies, '5')
    return (
        <div>
            <h1>{tittle}</h1>
            {movies?.map((movie) => (
                <MoviewCard key={movie.id} posterPath={movie.poster_path} />
            ))}

        </div>
    )
}

export default MoviewList