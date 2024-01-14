import { combineReducers, configureStore } from "@reduxjs/toolkit";
import weatherReducer from './slice/WeatherSlice'


const rootReducer = combineReducers({
    weather:weatherReducer
})

const store = configureStore({
    reducer:rootReducer
})

export default store