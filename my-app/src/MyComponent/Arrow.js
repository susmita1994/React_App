import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';


// function Arrow(){

//     return(
//         <button className="btn btn-danger">My Button</button>
//     );
// }

const AlertMe=(a)=>{
    alert(a);
}

const Arrow=()=>{
    return(
        <button onClick={AlertMe.bind(this,"I am from Arrow function")} className="btn btn-danger">My Button</button>
    );
}



export default Arrow;