import React, { Component } from 'react';
import logo from './logo.svg';

/* CSS */
import './App.css';

/* Components */
import  PlayerPlay  from './PlayerPlay/PlayerPlay';
import DisplayHagmanWord  from './DisplayHangmanWord/DisplayHangmanWord';
import Modal from "./Modal/Modal";
import Score from "./Score/Score";
import Level from "./Level/Level";
import Keyboard from  './Keyboard/Keyboard';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedWord: '',
      currentLevel: 1,
      wordArr:[],
      currentWord: 0,
      playerWord: [],
      keyboardArr: ("qwertyuiopasdfghjklzxcvbnm").split(''),
      levelWords: {
        1:{
          words:["carro", "moto", "bus"]
        },
        2:{
          words:["casona", "caballo", "hipopotamo"]
        },
        3:{
          words:["futbolistico", "hiperblanduzco", "subcontinental"]
        },
      },
      chances: 9,
      gallow: ['rope','foots','pants','left-hand','right-hand','body','head','support-2', 'support-1','table'],
      showModal: false,
      modalTitle: "",
      modalMsg: "",
      nextWord: false,
      nextLevel: false,
      resetGame: false,
      finalScore: false,
      score:0
    }
    
    this.handleResetGame = this.handleResetGame.bind(this);
    this.handleCheckChar = this.handleCheckChar.bind(this);
    this.handleGoNextLevel = this.handleGoNextLevel.bind(this);
    this.handleGoNextWord = this.handleGoNextWord.bind(this);
  }

  componentDidMount(){
    this.updateWord();
  }

  updateWord(){
    this.setState({
      wordArr: this.state.levelWords[this.state.currentLevel].words[this.state.currentWord].split(''),
      playerWord: this.state.levelWords[this.state.currentLevel].words[this.state.currentWord].split('')
    }, () =>{
      this.hideWord();
      this.hideZombie();
    })
  }

  hideWord(){
    for (let i = 0; i < this.state.wordArr.length; i++) {
      document.getElementById(i).innerHTML = "_"
    }
  }

  hideZombie(){
    for (let i = 0; i < this.state.gallow.length; i++) {
      document.getElementById(this.state.gallow[i]).style.display = "none";
    }
  }

  resetKeyboard(){
    for (let i = 0; i < this.state.keyboardArr.length; i++) {
      document.getElementById(this.state.keyboardArr[i]).style.visibility = 'visible';
      //console.log(document.getElementById(keyboardArr[i]))
    }
  }

    handleResetGame(){
      this.setState({
        chances: 9,
        showModal: false,
        modalTitle: "",
        modalMsg: "",
        resetGame: false,
        wordArr: this.state.levelWords[this.state.currentLevel].words[this.state.currentWord].split(''),
        playerWord: this.state.levelWords[this.state.currentLevel].words[this.state.currentWord].split(''),
        score: 0
      },() =>{
        this.hideWord();
        this.hideZombie();
        this.resetKeyboard();
      })
    }

    handleCheckChar(evt){
      let flag = false;
      let keyboardArrTemp = this.state.keyboardArr;

      let element = this.state.wordArr.find((el, index) => {

         if(el === evt.target.id.toLowerCase()){
          document.getElementById('beep').play();
           document.getElementById(index).innerHTML = el
           document.getElementById(evt.target.id).style.visibility = 'hidden';
           flag = true;
           this.state.playerWord.shift();
           this.setState({
             score: this.state.score + 20
           })
         }
    })

    if(flag != true && evt.target.id != "" && evt.target.id != undefined && this.state.gallow[this.state.chances] != null){
      document.getElementById(this.state.gallow[this.state.chances]).style.display = "block";
      document.getElementById(evt.target.id).style.visibility = 'hidden';
      document.getElementById('error').play();
      this.setState({
       chances: this.state.chances - 1
      })
    } 
    
    if(this.state.gallow[this.state.chances] == null){
      document.getElementById('gameover').play();
      this.setState({
        showModal: true,
        modalTitle: "Oh no!!!",
        modalMsg: "Has ahorcado al zombie, intentalo de nuevo!",
        finalScore: true,
        resetGame: true,
        nextWord: false,
        nextLevel: false
      })
      this.resetKeyboard();
    }else if(this.state.playerWord.length <= 0){
      document.getElementById('success').play();
      this.setState({
        showModal: true,
        modalTitle: "Muy bien!",
        modalMsg: "Has adivinado la palabra "+ this.state.wordArr.join('').toLocaleUpperCase(),
        nextWord: true
      }, () => {
      this.resetKeyboard();
      })
    }     
  }

  handleGoNextWord(){
    this.setState({
      currentWord: this.state.currentWord + 1,
      chances: 9,
      showModal: false
    },() => {
      if(this.state.levelWords[this.state.currentLevel].words[this.state.currentWord] != null && this.state.levelWords[this.state.currentLevel].words[this.state.currentWord] != undefined){
        this.updateWord();
      }else if(this.state.levelWords[this.state.currentLevel] != null && this.state.levelWords[this.state.currentLevel] != undefined){
        this.setState({
          showModal: true,
          modalTitle: "Excelente!!!!",
          modalMsg: "Has avanzando al siguiente nivel",
          nextWord: false,
          nextLevel: true
        }, () => {
          this.hideWord();
          this.hideZombie();
          document.getElementById('levelup').play();
        })
      }
    })  
  }

  handleGoNextLevel(){
      this.setState({
        currentLevel: this.state.currentLevel + 1,
        currentWord: 0,
        showModal: false,
        nextLevel: false
      }, ()=>{
        if(this.state.levelWords[this.state.currentLevel] != null && this.state.levelWords[this.state.currentLevel] != undefined){
          this.updateWord();
        }else{
          this.setState({
            showModal: true,
            modalTitle: "Impresionante!!!",
            modalMsg: "No hay mas niveles, has superado todos.",
            nextWord: false,
            nextLevel: false,
            finalScore: true,
            resetGame: true,
            currentLevel: 1,
            currentWord: 0
          })
          document.getElementById('levelup').play();
          this.resetKeyboard();
        }
      })
  }

  render() {
    return (
      <div className="container-fluid">
        <Level currentLevel={this.state.currentLevel}/>
        <Score score={this.state.score} />
        <DisplayHagmanWord wordArr={this.state.wordArr}/>
        <PlayerPlay wordArr={this.state.wordArr} chances={this.state.chances} gallow={this.state.gallow} handleCheckChar={this.handleCheckChar} />
        <Modal showModal={this.state.showModal} modalTitle={this.state.modalTitle} modalMsg={this.state.modalMsg}  nextWord={this.state.nextWord} nextLevel={this.state.nextLevel} resetGame={this.state.resetGame} handleResetGame={this.handleResetGame} handleGoNextWord={this.handleGoNextWord} handleGoNextLevel={this.handleGoNextLevel} finalScore={this.state.finalScore} score={this.state.score}/>
        <Keyboard handleCheckChar={this.handleCheckChar}  />
      </div>
    )
  }
}

export default App;
