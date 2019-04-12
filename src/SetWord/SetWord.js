import React, { Component } from "react";
import './setWord.css'

class SetWord extends React.Component{
    constructor(props){
      super(props)
  
      this.state = {
        display: true
      }
      
      this.updateDisplay = this.updateDisplay.bind(this)
    }
    
    updateDisplay(e){
      e.preventDefault();
      
      if(this.state.display){
         this.setState({
        display: false
      })
      }else if(!this.state.display){
        this.setState({
        display: true
      })
      }
    
    }
   
    
    render(){
      return(
        <div className="row text-center mt-5 p-0">
        <div className="col-4 center" style={{display: this.state.display ? 'block': 'none'}}>
          <input className="form-control uppercase" placeholder="Write your word" type="text" name="word" onChange={this.props.updateWord} />
        </div>
        <div className="col-12 mt-2">
          <button className="btn btn-small btn-success" onClick={this.updateDisplay}>Save/Change Word</button>
        </div>
       </div>
      )
    }
    
  }

  export default SetWord;