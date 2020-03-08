
import axios from 'axios'

export const GET_ALL_ENTRIES = 'GET_ALL_ENTRIES'

export function getAllEntries() {
    return (dispatch) => {
        axios.get("/api/entries").then((result) => {
            dispatch({
                type: GET_ALL_ENTRIES,
                entries: result.data
            })    
        }).catch((err) => {
            
        });
        
    }
}