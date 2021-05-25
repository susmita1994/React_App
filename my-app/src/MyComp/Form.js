import React, { Component } from 'react';

class Form extends Component {

    constructor(){
        super();
        this.state={
            username:" "
        }
    }


    onChangeHandler=(event)=>{
        var myName= event.target.name;
        var myValue= event.target.value;
        this.setState({[myName]:myValue})
    }

    onSubmitHandler=()=>{
        alert(this.state.username);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmitHandler}>
                    <p>My First Form</p>
                    <p>{this.state.username}</p>
                    <input name="username" onChange={this.onChangeHandler} type="tect" placeholder="Your Name"></input> <br></br>
                    <input type="submit" value="Submit Now"></input>
                </form>
            </div>
        );
    }
}

export default Form;