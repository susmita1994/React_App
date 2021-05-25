import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class NewDemo extends Component {
    
    myFun(){

        
        var container= document.getElementById("myID");
        var element= <h1>My Name is susmita,I am from ReactDom</h1>
        var callback=function(){
            alert("I am callback")
        }

        ReactDOM.hydrate(element,container,callback);
    }

    render() {
        return (
            <div>
                <button onClick={this.myFun}>Change</button>
                <h1 id="myID">I am Susmita</h1>
            </div>
        );
    }
}

export default NewDemo;