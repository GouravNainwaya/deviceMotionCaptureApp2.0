import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    ResetTimer: false,
    counter: 0,
    TimeDuration: 30
}

const MySlice = createSlice({
    name: 'MySlice',
    initialState,
    reducers: {
        setResetTimer(state, action){
            state.ResetTimer = action.payload
            console.log('action.payload', action.payload)
        },
        setCounter(state, action){
            state.counter += 1
            console.log('action.payload setCounter', state.counter)
        },
        setTimeDuration(state, action){
            state.TimeDuration = 30
            console.log('action.payload setTimeDuration', action.payload)
        },
    }
})

export const {setResetTimer,setCounter,setTimeDuration} = MySlice.actions
export default MySlice.reducer