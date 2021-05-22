import React,{Component} from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
class Condition1 extends Component{

    constructor(){
        super()
        this.state={
            login:true

        }
    }

    render(){
        // if-else condition 
        if(this.state.login== true){
            return <button className="btn btn-primary">Logout</button>
        }
        else{
            return <button className="btn btn-primary">Login Now</button>
        }
        // condition return with variable element
        return(
            this.state.login?(
                 <h1>I am first</h1>
             ) 
            :
            (
            <h1>I am Second</h1>
            )
        )
    }
}
export default Condition1;