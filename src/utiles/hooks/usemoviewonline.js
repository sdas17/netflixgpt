import { options } from '../../utiles/userconstant';
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../../utiles/MoviewSlice';
import { useEffect } from 'react';

const usemoviewonline = (() => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const dispatch = useDispatch()


    const url = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';

    const fetchApiCalling = async () => {
        try {
            const response = await fetch(url, options); // Replace "url" with the actual URL and "options" with your fetch options
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json(); // Assuming the response is in JSON format
            console.log(data.results); // Handle the data
            dispatch(addNowPlayingMovies(data.results))
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        fetchApiCalling();
    }, [])
})
export default usemoviewonline;