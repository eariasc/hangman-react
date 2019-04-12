import React, { Component } from "react";
import "./displayHangmanWord.css";

class DisplayHagmanWord extends React.Component{
    constructor(props){
      let element;
      super(props)
    }
    
    render(){
      let index = -1;
        return(
        <div className="row p-0">
          <div className="col-12 text-center center text-big">
              {this.props.wordArr.map((el) => <span className="text-big" id={index += 1}> _ </span>)}
          </div>
        </div>
      )
    }
  }

  export default DisplayHagmanWord;