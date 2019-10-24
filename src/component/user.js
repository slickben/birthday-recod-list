import React  from 'react';
// import propType from "prop-types"
import { useSelector, useDispatch } from 'react-redux';
import { fetchPost }  from '../redux/actions/postAction';
// import { initailState }  from '../redux/store';


 function User () {
    const usePosts = useSelector((state) => state.userPost.userPosts)
    // const singlePost = useSelector( (state) => state.post)
    const dispatch = useDispatch() 
    // console.log(singlePost)
    dispatch(fetchPost())
    console.log(usePosts)
    
    return (
        <>
            {
                usePosts.map( (user) => {
                    return (
                        <tbody>
                            <tr>
                                <td>{user.firstName}</td>
                                <td>{user.lastName}</td>
                                <td>{user.birthday.slice(-24, -14)}</td>
                                <td>{user.age}</td>
                                <td>{user.hobby}</td>
                            </tr>
    
                        </tbody>
                    )
                })
            }
        </>
    )
}

export default User

// User.propType = {
//     fetchPost: propType.func.isRequired,
//     userPosts: propType.array.isRequired,
//     newPost: propType.object
// }

// const mapStateToProps = state => ({
//     userPosts: state.userPost.userPosts,
//     newPost: state.userPost.userPosts
// })


// export default connect(mapStateToProps, { fetchPost })(User)