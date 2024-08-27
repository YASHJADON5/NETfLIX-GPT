import React from 'react'
import { useSelector } from 'react-redux'
import Movielist from './Movielist'
import Movielist2 from './MovieList2'






function SecondaryContainer() {
    const trendingmovies= useSelector((store)=> store.movies.popularMovies)
    const popularMovies= useSelector((store)=>store.movies.popularShows)
    const popularShows= useSelector((store)=>store.movies.trendingMovies)
    const scifimovies= useSelector((store)=>store.movies.marvelMovies);
    
    if(!trendingmovies) return;
    if(!popularMovies) return;
    if(!popularShows) return;
    if(!scifimovies) return;
    // console.log("kumaro")
    // console.log(scifimovies)

    

   
    
    
  return (
    <div className='bg-black w-screen'>
    <div className='relative -mt-52'>
        <Movielist title={"Trending Movies"} movies={trendingmovies.movies}></Movielist>
         <Movielist title={"Popular Movies"} movies={popularMovies.similarMovies}></Movielist>
         <Movielist title={"Popular Shows"} movies={popularShows.contents}></Movielist>
        <Movielist2 title={"Anime"} movies={scifimovies.data}></Movielist2>




    </div>
    </div>
  )
}

export default SecondaryContainer
