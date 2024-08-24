import {createSlice} from '@reduxjs/toolkit'


export const moviesSlice = createSlice({
   name : "movies",
   initialState:{
    popularMovies:null,
    popularShows:null,
    trendingMovies:null,
    marvelMovies:null,
   },
   reducers:{
         
    addPopularMovies:(state,action)=>{
         state.popularMovies=action.payload;
    },
    addPopularShows:(state,action)=>{
          state.popularShows=action.payload
    },
    addTrendingMovies:(state,action)=>{
      state.trendingMovies=action.payload
    },
    addMarvelMovies :(state,action)=>{
      state.marvelMovies=action.payload
    }


   }


})

export const {addPopularMovies,addPopularShows,addTrendingMovies,addMarvelMovies}= moviesSlice.actions;

export default moviesSlice.reducer;