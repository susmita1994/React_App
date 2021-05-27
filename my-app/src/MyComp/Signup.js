import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
class Signup extends Component {
    constructor(){
        super();
        this.state={
            fname:" ",
            lname:" ",
            email:" ",
            mobile:" "
        }
    }

    onChangeHandler=(event)=>{
        var inputName=event.target.name;
        var inputValue=event.target.value;
        this.setState({[inputName]:inputValue});
    }

    render() {
        return (
            <div>
                <p>First Name:{this.state.fname}</p>
                <p>Last Name: {this.state.lname}</p>
                <p>Email: {this.state.email}</p>
                <p>Mobile: {this.state.mobile}</p>

                <form >
                    <label> First Name : </label>
                    <input name="fname" onChange={this.onChangeHandler}  type="text" placeholder="First Name"></input> <br></br><br></br>
                    <label>Last Name : </label>
                    <input name="lname" onChange={this.onChangeHandler} type="text" placeholder="Last Name"></input> <br></br> <br></br>
                    <label> Email : </label>
                    <input name="email" onChange={this.onChangeHandler} type="text" placeholder="Email"></input> <br></br> <br></br>
                    <label> Mobile : </label>
                    <input name="mobile" onChange={this.onChangeHandler} type="text" placeholder="Mobile"></input> <br></br> <br></br>
                    <input name="submit" type="submit" className="btn btn-primary" value="Signup"></input>
                </form>
            </div>
        );
    }
}

export default Signup;