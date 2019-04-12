import React, { Component } from "react";
import "./playerPlay.css";

class PlayerPlay extends React.Component{
    constructor(props){
      super(props)
     
      
    }
                                            
    render(){
      return(
        <div className="row">
            <div className="col-12 text-center">
            <div className="gallow"></div>
            <audio id="error" src="http://eariasc.com/hangman-game/sound-effects/error.mp3"></audio>
            <audio id="beep" src="http://eariasc.com/hangman-game/sound-effects/beep.mp3"></audio>
            <audio id="success" src="http://eariasc.com/hangman-game/sound-effects/success.mp3"></audio>
            <audio id="gameover" src="http://eariasc.com/hangman-game/sound-effects/lose.mp3"></audio>
            <audio id="levelup" src="http://eariasc.com/hangman-game/sound-effects/level.mp3"></audio>
                   <div id="rope" className="rope"></div>
                   <div id="support-2" className="support-2"></div>
                   <div id="support-1" className="support-1"></div>
                   <div id="table" className="table"></div>
                   <div id="head" className="head"></div>
                   <div id="body" className="body"></div>
                   <div id="left-hand" className="left-hand"></div>
                   <div id="right-hand" className="right-hand"></div>
                   <div id="pants" className="pants"></div>
                   <div id="foots" className="foots"></div>
            </div>
        </div>
      )
    }
  }

export default PlayerPlay;