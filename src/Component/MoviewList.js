import React from 'react'
import MoviewCard from './MoviewCard'

const MoviewList = ({ tittle, movies }) => {
    return (
        <div className='p-6'>
            <h1 className='text-4xl text-white'>{tittle}</h1>

            <div className='flex overflow-x-scroll'>

                <div className='flex'>
                    {movies?.map((movie) => (
                        <MoviewCard key={movie.id} posterPath={movie.poster_path} />
                    ))}
                </div>


            </div>
        </div>

    )
}

export default MoviewList