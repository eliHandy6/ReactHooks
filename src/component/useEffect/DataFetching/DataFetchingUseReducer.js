import React, { useReducer, useEffect } from 'react'
import axios from 'axios'


const initialState = {
    loading: true,
    error: '',
    posts: []

}
const reducer = (state, action) => {

    switch (action.type) {
        case 'FETCH_SUCCESS':

            return {
                loading: false,
                posts: action.payload,
                error: ''

            }
    
        case 'FETCH_ERROR':

            return {
                loading: false,
                posts: [],
                error: ' Something went Wrong'

            }
            
        default:
            return state;
            
    }

}
function DataFetchingUseReducer() {

    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(res => {
                dispatch({ type: 'FETCH_SUCCESS', payload: res.data })
            })
            .catch(err => {
                dispatch({ type: 'FETCH_ERROR' })

            })
    }, [])

    return (
        <div>
            <ul>
                {
                    state.loading ? 'Loading....' :
                    state.posts.map(post => <li key={post.id}>{post.title}</li>)
                }
                {
                    state.error ? state.error : null
                }
            </ul>
        </div>
    )
}

export default DataFetchingUseReducer
