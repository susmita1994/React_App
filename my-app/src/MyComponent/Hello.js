import React from 'react';

function Hello(props){

    function DoThis() {
        alert("Button is clicked..");
    }

    return (
        <div>
            <button onClick={DoThis}>Click Me</button>

            <h1>Hello {props.name}</h1>
        </div>
    );
}

export default Hello;