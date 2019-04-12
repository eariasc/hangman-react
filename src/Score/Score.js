import React, {Component} from 'react';
import './score.css';

function Score(props){

    return (
        <div className="score">
            <strong>Score: </strong>
            <strong>{props.score}</strong>
        </div>
    )
}

export default Score;