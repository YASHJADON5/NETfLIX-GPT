import React, { useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { addMarvelMovies } from '../utils/moviesSlice'
const anime_api_key= import.meta.env.VITE_ANIME_KEY



function useShows() {
    
    const dispatch= useDispatch()
    const selector = useSelector((store)=> store.movies);
  
//     // const fetchMovies=async ()=>{
//     //     try{
//     //         const response= await axios.get("https://moviesverse1.p.rapidapi.com/indian-top-rated-movies",{
//     //             headers:{
//     //                 'x-rapidapi-key': '1d6cc22cf0msha93f4e3932cff80p130d54jsnfb1bfd705a67',
//     //                 'x-rapidapi-host': 'moviesverse1.p.rapidapi.com'
//     //             }
//     //         })

//     //         const data= response.data;
//     //         console.log(data)
//     //         dispatch(addPopularShows(response.data.topRatedIndian))
//     //     }
//     //     catch(err){
//     //         console.log(err);
//     //     }
//     // }
//     //   fetchMovies();


    useEffect(()=>{
      axios.get("https://anime-db.p.rapidapi.com/anime",{
        params:{
            page: '1',
            size: '10',
            search: 'Fullmetal',
            genres: 'Fantasy,Drama',
            sortBy: 'ranking',
            sortOrder: 'asc'
        },
        headers:{
            'x-rapidapi-key': anime_api_key,
            'x-rapidapi-host': 'anime-db.p.rapidapi.com'
        }

    })
    .then((response)=>{
        // console.log("y")
        // console.log(response.data);
        // console.log("s")

        dispatch(addMarvelMovies(response.data))
    })
    .catch((err)=>{
        console.log(err);
    })
    },[])

}

export default useShows
