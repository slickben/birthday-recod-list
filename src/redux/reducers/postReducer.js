import {ADD_NEW_POST, FETCH_USER_POST} from '../actions/types'

const initialState = {
    userPosts: [],
    post: {}
}

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USER_POST: 
            console.log('reducer')
            // console.log({
            //     ...state,
            //     userPosts: action.payload
            // })
            return {
                ...state,
                userPosts: action.payload
            }
            
        case ADD_NEW_POST: 
        console.log("new post")
            return {
                ...state,
                post: action.payload
            }
        default:
            return state
    }
}