import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMoviewSearchbar from './GptMoviewSearchbar'
import { background_ima_cdn_url } from '../utiles/userconstant'

const GptSearch = () => {
    return (
        <div>
            <div className="absolute -z-10">
                <img src={background_ima_cdn_url} alt="logo"></img>

            </div>
            <GptSearchBar />
            <GptMoviewSearchbar />
        </div>

    )
}

export default GptSearch