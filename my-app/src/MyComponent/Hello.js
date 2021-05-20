import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

function Hello(props){

    function DoThis(a) {
        alert(a);
    }

    return (
        <div>
            <button className="btn btn-info" onClick={DoThis.bind(this,"Hello i am fun para")}>Click Me</button>
            <h1>Hello {props.name}</h1>
        </div>
    );
}

export default Hello;