import React, { useState } from 'react'
import Calendar from 'react-calendar';
import {useDispatch } from 'react-redux';
import {createPost} from '../redux/actions/postAction';


function Form (){
    // const post = useSelector( state => state.post)
    const dispatch = useDispatch();
    // console.log(post)

    const [form, setValues] = useState({
        firstName: '',
        lastName: '',
        date: new Date(),
        age: '',
        hobby: '',
      });
    

    const handleChange = (e) => {
        setValues({
            ...form,
            [e.target.name]: e.target.value
        });      
    }

    const handleChangeCalender = (date) => {
        // console.log(date.state.value)
        setValues({
            ...form,
            date: date
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const post = {
            firstName:  form.fisrtName,
            lastName: form.lastName,
            birthday: form.date, 
            age: form.age,
            hobby: form.hobby
        }
        
        dispatch(createPost(post));

        console.log(form.date)
        setValues({
            fisrtName: "",
            lastName: "",
            birthday: "",
            age: "",
            hobby: "",
        })
    }
    return (
        <div className="col-sm mt-4">
            <form onSubmit={handleSubmit}>
                <div className="form-group row">
                    <label htmlFor="fName" className="col-sm-3 col-form-label">First Name</label>
                    <input type="text" value={form.fisrtName} id="fName" name="fisrtName" className="col-sm-9" onChange={handleChange} ></input>
                </div>
                <div className="form-group row">
                    <label htmlFor="lName" className="col-sm-3 col-form-label">last Name</label>
                    <input type="text" value={form.lastName} id="lName" name="lastName" className="col-sm-9" onChange={handleChange}></input>
                </div>
                <div className="form-group row">
                    <label htmlFor="brithday" className="col-sm-3 col-form-label">Birthday</label>
                    <Calendar value={form.date}  id="brithday" className="col-sm-9 h-2 small" onChange={handleChangeCalender}/> 
                </div>
                <div className="form-group row">
                    <label htmlFor="age" className="col-sm-3 col-form-label">Age</label>
                    <input type="number" value={form.age} id="age" className="col-sm-9" name="age" onChange={handleChange}></input>
                </div>
                {/* <input type="date" name="fisrtName"></input> awaiting calender component */}
                <div className="form-group row">
                    <label htmlFor="hobby" className="col-sm-3 col-form-label">hobby</label>
                    <input type="text" value={form.hobby} className="col-sm-9" id="hobby" name="hobby" onChange={handleChange}></input>
                </div>
                
                <input type="submit" value="Submit" className="btn btn-primary large"></input>
            </form>
        </div>
    )
}

export default Form
// userForm.propType = {
//     // createPost: propType.func.isRequired
// }


// export default connect(null, {createPost})(userForm)