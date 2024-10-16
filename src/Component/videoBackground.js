import React from 'react';
import { useSelector } from 'react-redux';
import useAnimation from '../utiles/hooks/useAnimation';


const VideoBackground = ({ moviewId }) => {
    // const animationId = useSelector((store) => store.moviews?.animationMoviews)
    const animationId = useSelector((store) => store.movies?.animationMoviews);
    useAnimation({ moviewId });

    return (
        <div>
            <iframe
                className="w-screen aspect-video"

                src={
                    "https://www.youtube.com/embed/" +
                    animationId?.key +
                    "?&autoplay=1&mute=1"
                }
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
        </div>
    );
};

export default VideoBackground;
