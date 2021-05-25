import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class AnotherDemo extends Component {

    changeImg(){

      var  ImgID= document.getElementById("imgID");

      ReactDOM.findDOMNode(ImgID).src="https://cdn.pixabay.com/photo/2019/04/26/15/33/child-4157865_960_720.jpg"
    }

    render() {
        return (
            <div>
                <button onClick={this.changeImg} className="btn btn-info">ChangeImage</button> <br></br>
                <img id="imgID" src="https://cdn.pixabay.com/photo/2020/11/19/20/04/puffin-5759684_960_720.jpg"></img>
            </div>
        );
    }
}

export default AnotherDemo;