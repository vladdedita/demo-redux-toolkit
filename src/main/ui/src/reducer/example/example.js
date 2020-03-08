import {createReducer} from '../config/createReducer'
import { GET_ALL_ENTRIES } from '../../action/example'
const initialState = {
    entries: []
}
function getAllEntries(state,action){
    return {
        ...state,
        entries: action.entries
    }
}
export default createReducer(initialState, {
    [GET_ALL_ENTRIES]: getAllEntries,
})