import {ADD_NEW_POST, FETCH_USER_POST} from '../actions/types';
import axios from 'axios'

export const fetchPost = () => dispatch =>  {
   console.log("fetching")
    axios.get("https://glacial-shelf-46892.herokuapp.com/api/user")
        .then( (user) => {
            console.log(user.data)
            dispatch({
                type: FETCH_USER_POST,
                payload: user.data
            })
        })  
}

export const createPost = (postData) => dispatch =>  {
    console.log("action called")
    axios.post("https://glacial-shelf-46892.herokuapp.com/api/user", {
        firstName: postData.firstName,
        lastName: postData.lastName,
        birthday: postData.birthday,
        age: postData.age,
        hobby: postData.hobby
    })
        .then( (post) => {
             console.log(post)
             dispatch({
                 type: ADD_NEW_POST,
                 payload: post
             })
         })  
 }

