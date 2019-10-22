import React, { Component } from 'react';
import propType from "prop-types"
import { connect } from 'react-redux';
import { fetchPost }  from '../redux/actions/postAction';


 class User extends Component {

    componentWillMount () {
        this.props.fetchPost()
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.newPost){
            this.props.userPosts.unshift(nextProps.newPost)
        }
    }

    
    render() {
        // console.log(this.state.users)
        return (
            <>
                {
                    this.props.userPosts.map( (user) => {
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
}

User.propType = {
    fetchPost: propType.func.isRequired,
    userPosts: propType.array.isRequired,
    newPost: propType.object
}

const mapStateToProps = state => ({
    userPosts: state.userPost.userPosts,
    newPost: state.userPost.userPosts
})


export default connect(mapStateToProps, { fetchPost })(User)