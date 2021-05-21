import React,{Component} from 'react';

class Welcome extends Component{

    constructor(){
        super()

        var obj={
            name:"Susmita",
            age:["26","30","28","45"]
        }
        this.state=obj
    }

    render(){
        return <div>
            <h1>My Name Is:{this.state.name}</h1>
            <h1>Age:{this.state.age[1]}</h1>
        </div> 
    }
}

export default Welcome;