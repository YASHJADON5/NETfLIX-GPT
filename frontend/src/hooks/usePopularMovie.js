import { useEffect } from 'react'
import axios from 'axios'
import {useDispatch, useSelector} from 'react-redux'
const movie_verse_key = import.meta.env.VITE_MOVIE_VERESE_KEY




function usePopularMovie({endPoint,storeReducer, queryParams}) {
    console.log("1")
    
    const dispatch= useDispatch();
    const selector= useSelector((store)=> store.movies);


     
    useEffect(() => {
        let response;
       const fetchPopularMovies = async () => {
            try {
                 response = await axios.get(`${endPoint}`,{
                    headers: {
                         'x-rapidapi-key':  movie_verse_key ,
                         'x-rapidapi-host': 'movies-api14.p.rapidapi.com'
                    },
                    params: queryParams
                
                } );
                console.log("called")  
                dispatch(storeReducer(response.data))
                
            } catch (error) {
                console.error('Error fetching popular movies:', error);
            }
           
            
        };

         if(!selector.trendingMovies||!selector.popularShows||!selector.popularMovies)
            {fetchPopularMovies();}




    }, [dispatch]); // Empty dependency array means this runs once when the component mounts

  
}

export default usePopularMovie
