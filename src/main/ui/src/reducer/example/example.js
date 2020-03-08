import {createReducer} from '../config/createReducer'
import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
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

const entriesSlice = createSlice({
    name: 'entries',
    initialState: {
        entries:[]
    },
    reducers: {
        getAllEntries(state, action) {
            const entries = action.payload;
            state.entries=entries;
        }
        // getAllEntries: {
        //     reducer(state, action) {
                
        //     },
        //     prepare(entry) {
        //         return {payload: entry}
        //     }
        // }
    }
})

export const {getAllEntries} = entriesSlice.actions;

export default entriesSlice.reducer;

export const fetchEntries = () => async dispatch => {
    axios.get('api/entries').then((result) => {
        dispatch(getAllEntries(result.data))
    }).catch((err) => {
        
    });
}