import {createReducer} from '../config/createReducer'
import {createSlice} from '@reduxjs/toolkit'
import axios from 'axios'
const exampleSlice = createSlice({
    id:'example',
    name:'example',
    initialState: {
        entries:[]
    },
    reducers : {
        getAllEntries(state, action) {
            state.entries = (action.payload.entries);
        },
        addEntry : {
            reducer(state, action) {
                state.entries.push(action.payload.entry)
            },
            prepare (text) {
                const id = Math.random();
                return {payload: {entry: {id, name: text + id}}}
            }
        }
    }
})

export const {getAllEntries, addEntry} = exampleSlice.actions

export default exampleSlice.reducer

export const fetchAllEntries = () => async dispatch => {
    axios.get("/api/entries").then((result) => {
        dispatch(getAllEntries({entries: result.data}))  
    }).catch((err) => {
        
    });
}

// const initialState = {
//     entries: []
// }
// function getAllEntries(state,action){
//     return {
//         ...state,
//         entries: action.entries
//     }
// }
// export default createReducer(initialState, {
//     [GET_ALL_ENTRIES]: getAllEntries,
// })