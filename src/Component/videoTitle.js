import React from 'react'

const videoTitle = ({ title, overview }) => {
    return (
        <div className=' w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black'>
            <h2 className='text-6xl font-bold'>{title}</h2>
            <p className='py-6 text-lg w-1/4'>{overview}</p>
            <div>
                <button className="bg-white text-black p-4 px-12 mx-2 text-xl bg-opacity-50 rounded-lg hover:bg-opacity-90">
                    ▶ Play</button>
                <button className="bg-gray-500 text-white p-4 px-12  mx-2  text-xl bg-opacity-50 rounded-lg">
                    More info</button>
            </div>
        </div>
    )
}

export default videoTitle