import React from 'react'
import { IMG_CDN_URL } from "../utiles/userconstant";

const MoviewCard = ({ posterPath }) => {
    if (!posterPath) return null;
    return (
        <div>
            <img alt="Movie Card" src={IMG_CDN_URL + posterPath} />
        </div>
    )
}

export default MoviewCard