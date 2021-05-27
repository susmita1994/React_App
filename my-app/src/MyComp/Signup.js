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

        if (inputName==="fname") {

           var namePattern=/^([a-zA-Z]){2,30}$/;
            if(!namePattern.test(inputValue)){
                this.setState({fname:"First Name is not valid"});
            }
        }
        
        if (inputName==="lname") {
            var namePattern=/^([a-zA-Z]){2,30}$/;
            if(!namePattern.test(inputValue)){
                this.setState({lname:"Last Name is not valid"});
            }
        }

        if (inputName==="email") {
            var emailPattern=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            if(!emailPattern.test(inputValue)){
                this.setState({email:"Email is not valid"});
            }

        }

        if(inputName==="mobile"){
            if(!Number(inputValue)){
                this.setState({mobile:"Mobile No is not valid"});
            }
        }
        
    }

    render(){
        return (
            <div>
                <p>First Name:{this.state.fname}</p>
                <p>Last Name: {this.state.lname}</p>
                <p>Email: {this.state.email}</p>
                <p>Mobile: {this.state.mobile}</p>

                <form >
                    <input name="fname" onChange={this.onChangeHandler}  type="text" placeholder="First Name"></input> <br></br><br></br>
                    <input name="lname" onChange={this.onChangeHandler} type="text" placeholder="Last Name"></input> <br></br> <br></br>
                    <input name="email" onChange={this.onChangeHandler} type="text" placeholder="Email"></input> <br></br> <br></br>
                    <input name="mobile" onChange={this.onChangeHandler} type="text" placeholder="Mobile"></input> <br></br> <br></br>
                    <input name="submit" type="submit" className="btn btn-primary" value="Signup"></input>
                </form>
            </div>
        );
    }
}

export default Signup;