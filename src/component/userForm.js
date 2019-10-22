import React, { Component } from 'react'
import Calendar from 'react-calendar';
// import axios from 'axios';
import propType from "prop-types"
import { connect } from 'react-redux';
import { createPost } from '../redux/actions/postAction'


 class userForm extends Component {
    constructor () {
        super()
        this.state = {
            fisrtName: "",
            lastName: "",
            date: new Date(),
            age: "",
            hobby: ""
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleChangeCalender = (date) => {
        // console.log(date.state.value)
        this.setState({
            date: date
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const post = {
            firstName:  this.state.fisrtName,
            lastName: this.state.lastName,
            birthday: this.state.date, 
            age: this.state.age,
            hobby: this.state.hobby
        }
        
        this.props.createPost(post)
        console.log(this.state.date)
        this.setState({
            fisrtName: "",
            lastName: "",
            birthday: "",
            age: "",
            hobby: "",
        })
    }

    render() {
        return (
            <div className="col-sm mt-4">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group row">
                        <label htmlFor="fName" className="col-sm-3 col-form-label">First Name</label>
                        <input type="text" value={this.state.fisrtName} id="fName" name="fisrtName" className="col-sm-9" onChange={this.handleChange} ></input>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="lName" className="col-sm-3 col-form-label">last Name</label>
                        <input type="text" value={this.state.lastName} id="lName" name="lastName" className="col-sm-9" onChange={this.handleChange}></input>
                    </div>
                    <div className="form-group row">
                       <label htmlFor="brithday" className="col-sm-3 col-form-label">Birthday</label>
                       <Calendar value={this.state.date}  id="brithday" className="col-sm-9 h-2 small" onChange={this.handleChangeCalender}/> 
                    </div>
                    <div className="form-group row">
                        <label htmlFor="age" className="col-sm-3 col-form-label">Age</label>
                        <input type="number" value={this.state.age} id="age" className="col-sm-9" name="age" onChange={this.handleChange}></input>
                    </div>
                    {/* <input type="date" name="fisrtName"></input> awaiting calender component */}
                    <div className="form-group row">
                        <label htmlFor="hobby" className="col-sm-3 col-form-label">hobby</label>
                        <input type="text" value={this.state.hobby} className="col-sm-9" id="hobby" name="hobby" onChange={this.handleChange}></input>
                    </div>
                    
                    <input type="submit" value="Submit" className="btn btn-primary large"></input>
                </form>
            </div>
        )
    }
}

userForm.propType = {
    createPost: propType.func.isRequired
}

export default connect(null, {createPost})(userForm)