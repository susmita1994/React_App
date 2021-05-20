import React from 'react';

function Hello(props){

    function DoThis(a) {
        alert(a);
    }

    return (
        <div>
            <button onClick={DoThis.bind(this,"Hello i am fun para")}>Click Me</button>

            <h1>Hello {props.name}</h1>
        </div>
    );
}

export default Hello;