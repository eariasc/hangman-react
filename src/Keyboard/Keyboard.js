import React, {Component} from 'react';
import './keyboard.css';

class Keyboard extends Component{
    constructor(props){
        super(props);

        this.state = {
            firstRowLetters: ("qwertyuiop").split(''),
            secondRowLetters: ("asdfghjkl").split(''),
            thirdRowLetters: ("zxcvbnm").split('')
        }
    }


    render(){
        return(
        <div  className="row">
            <div className="col-12 text-center mb-md-2 mb-1">
                {this.state.firstRowLetters.map((el) => {
                    return <button id={el} onClick={this.props.handleCheckChar} className="keyboard-key">{el}</button>
                })}
            </div>
            <div className="col-12 text-center mb-md-2 mb-1">
                {this.state.secondRowLetters.map((el) => {
                    return <button id={el} onClick={this.props.handleCheckChar} className="keyboard-key">{el}</button>
                })}
            </div>
            <div className="col-12 text-center mb-md-2 mb-1">
                {this.state.thirdRowLetters.map((el) => {
                    return <button id={el} onClick={this.props.handleCheckChar} className="keyboard-key">{el}</button>
                })}
            </div>
        </div>
        )
    }
}

export default Keyboard