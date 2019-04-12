import React, { Component } from "react";

class Level extends Component{
constructor(props){
    super(props)
}

    render(){
        return (
            <div className="row">
                <div className="col-4 m-0 m-auto pt-md-5 pt-2 text-center">
                <h1>Level {this.props.currentLevel}</h1>
                </div>
            </div>
        )
    }
}

export default Level;