import React,{Component} from 'react';

class Welcome extends Component{

    constructor(){
        super()

        this.state={
            name:"Susmita",
            age:"26"

        }
    }

    render(){
        return <div>
            <h1>My Name Is:{this.state.name}</h1>
            <h1>Age:{this.state.age}</h1>
        </div> 
    }
}

export default Welcome;