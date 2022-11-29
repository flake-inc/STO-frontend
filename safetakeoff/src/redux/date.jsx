import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  date: "",
  option:"",
}

export const dateSlice = createSlice({
    name: 'date',
    initialState,
    reducers: {
        saveDate: (state, action) => {
            state.date = action.payload
            console.log("saving....", action.payload)
        },
        saveOption: (state, action) => {
            console.log("saving....", action.payload)
            state.option = action.payload
        },
    },
})

export const { saveDate, saveOption } = dateSlice.actions

export default dateSlice.reducer