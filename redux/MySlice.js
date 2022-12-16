import { createSlice } from "@reduxjs/toolkit";
import datas from './../Screens/data';

const initialState = {
    counter: 0,
    CorrectScreenSound: true,
    PassedScreenSound: true,
    TimeDuration: 30,
    whentime: false
}

const MySlice = createSlice({
    name: 'MySlice',
    initialState,
    reducers: {
        setCounter(state, action){
            state.counter =  state.counter + 1
            console.log('action.payload setCounter', state.counter)
        },
        setCorrectScreenSound(state, action){
            state.CorrectScreenSound = action.payload
            console.log("🚀 ~ file: MySlice.js:19 ~ setCorrectScreenSound ~ action.payload", action.payload)
        },
        setPassedScreenSound(state, action){
            state.PassedScreenSound = action.payload
            console.log("🚀 ~ file: MySlice.js:24 ~ setPassedScreenSound ~ action.payload", action.payload)
        },
        setwhentime(state, action){
            state.whentime = action.payload
            console.log("🚀 ~ file: MySlice.js:30 ~ setwhentime ~ action.payload", action.payload)
        },
    }
})

export const {setResetTimer,setCounter,setCorrectScreenSound,setPassedScreenSound,setwhentime} = MySlice.actions
export default MySlice.reducer