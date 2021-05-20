import React,{Component} from 'react';

class Welcome extends Component{

     DoThisFromClass(a) {
        alert(a)
    }

    render(){
        return  <div>
            <button onClick={this.DoThisFromClass.bind(this,"I am class para")}>Click Me From Class </button>
            <h1>I am from {this.props.name}</h1>
        </div> 
    }
}

export default Welcome;