import React, { Component } from 'react';
import axios from 'axios'

export default class User extends Component {
    constructor() {
        super()
        this.state = {
            users: []
        }
    }

    componentDidMount() {
       setInterval(() => {
           this.fatchdata()
           console.log("fatching dat every 5sc")
       }, 500);
    }

    fatchdata = () => {
         axios.get("https://glacial-shelf-46892.herokuapp.com/api/user")
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
