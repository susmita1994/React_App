import React,{Component} from 'react';

class Welcome extends Component{

     DoThisFromClass() {
        alert('Button clicked from class')
    }

    render(){
        return  <div>
            <button onClick={this.DoThisFromClass}>Click Me From Class </button>
            <h1>I am from {this.props.name}</h1>
        </div> 
    }
}

export default Welcome;