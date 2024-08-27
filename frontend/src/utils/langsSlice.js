import {createSlice} from '@reduxjs/toolkit'


const langSlice= createSlice({
   name:"lang",
   initialState:{
    language:"English",
   },
   reducers:{
    changeLanguage:(state,action)=>{
        state.language=action.payload
    }
   }

})

export const {changeLanguage}= langSlice.actions

export default langSlice.reducer;
