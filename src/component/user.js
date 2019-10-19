import React, { Component } from 'react';
import axios from 'axios'

export default class User extends Component {
    constructor() {
        super()
        this.state = {
            users: []
        }
    }

    componentWillMount() {
        axios.get("https://afternoon-sands-89510.herokuapp.com/api/user")
            .then( (user) => {
                this.setState({
                    users: user.data
                })
            })
    }

    
    render() {
        console.log(this.state.users)
        return (
            <>
                {
                    this.state.users.map( (user) => {
                        return (
                            <tbody>
                                <tr>
                                {/* <th scope="row">2</th> */}
                                    {/* <td>{user.firstName}</td>< */}
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
