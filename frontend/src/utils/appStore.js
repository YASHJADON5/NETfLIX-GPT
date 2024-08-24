import {configureStore} from '@reduxjs/toolkit'
import movieReducer from './moviesSlice'
import gptRecucer from './GptSlice'
import langReducer from './langsSlice'



const store = configureStore({
    reducer:{
        movies:movieReducer,
        gpt:gptRecucer,
        lang:langReducer,
    }

})

export default store;