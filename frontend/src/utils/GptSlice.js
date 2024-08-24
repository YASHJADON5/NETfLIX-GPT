import { createSlice } from "@reduxjs/toolkit";


const gptSlice= createSlice({
    name :"gpt",
    initialState:{
        showGptSearch:false,
        gptMovies:null,
        searchResults:null,
    },

    reducers:{
           
        toggleGptSearchView:(state)=>{
            state.showGptSearch=!state.showGptSearch
        },
        addGptMovieResult:(state,action)=>{
            state.gptMovies=action.payload
        },
        addSearchResults:(state,action)=>{
            state.searchResults=action.payload
        }


    },



})

export const {toggleGptSearchView,addGptMovieResult,addSearchResults} = gptSlice.actions

export default gptSlice.reducer;