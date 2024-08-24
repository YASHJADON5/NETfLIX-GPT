import React, { useMemo } from 'react'
import { useSelector } from 'react-redux'
import MovieCard2 from '../MovieCard2';

function GptMovieSuggestions() {

  const selector= useSelector((store)=> store.gpt)
  const movieList= selector.searchResults;
  const tmdbmovieResult=selector.gptMovies;
  // if(!selector) return;
  if(movieList===null || tmdbmovieResult===null) return;

  // console.log(movieList)
  // console.log(tmdbmovieResult)


  
    let arr=[];


    tmdbmovieResult.map((movies,outerindex)=>
  
      movies.forEach((innerobj)=>arr.push({id:outerindex,title:innerobj.title,image:innerobj.poster_path}))
  
      
    );
 




  return (
    <div className=''>
      
    <div className='flex  overflow-x-auto p-8 no-scrollbar'>
      {arr.map(((movie,index)=>{
       
        return <MovieCard2 key={index} title={movie.title} imageSource={`https://image.tmdb.org/t/p/w500`+movie.image}     />
      }))}
      
    </div>

</div>
  )
}

export default GptMovieSuggestions
