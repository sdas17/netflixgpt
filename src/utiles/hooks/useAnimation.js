import { options } from '../../utiles/userconstant';
import { useDispatch } from 'react-redux';
import { addAnimationmovews } from '../../utiles/MoviewSlice';
import { useEffect } from 'react';

// const useAnimation = (() => {
//     
// })
// export default useAnimation;
const useAnimation = (({ moviewId }) => {
    const animation = useDispatch();

    /* thier is two way manage data  */
    // const [animation, setAnimation] = useState(null)
    /* Fetch by movie id */
    /* fetching trailer video update store */
    const trailerBackground = async () => {
        const url = `https://api.themoviedb.org/3/movie/${moviewId}/videos?language=en-US`;
        try {
            const response = await fetch(url, options);
            const moviewTrailerdata = await response.json();
            console.log(moviewTrailerdata.results, 'moviewTrailerdata');
            const dumydata = moviewTrailerdata.results.filter((data) => data.type === 'Trailer')
            const trailer = dumydata.length > 0 ? dumydata[0] : moviewTrailerdata.results[0];
            animation(addAnimationmovews(trailer))
            // setAnimation(trailer)

        } catch (error) {
            console.error('Error fetching movie trailer:', error);
        }
    };
    //api calling traillerbackground
    useEffect(() => {

        trailerBackground();

    }, []);
})
export default useAnimation;