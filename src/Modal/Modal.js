import React,{Component}  from "react";

class Modal extends React.Component{
    constructor(props){
        super(props);
    }


    render(){
        return(
                <div className="col-12">
                    <div style={this.props.showModal ? {display: "block"}: {display: "none"}} id="msgModal" class="modal" tabindex="-1" role="dialog">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">{this.props.modalTitle}</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <p>{this.props.modalMsg}</p>
                                <p style={this.props.finalScore ? {display: 'block'}: {display: 'none'}}>
                                Tu puntuacion final es de {this.props.score} puntos.</p>
                            </div>
                            <div class="modal-footer">
                                <button style={this.props.resetGame ? {display: "block"}: {display: "none"}} type="button" class="btn btn-secondary" onClick={this.props.handleResetGame}>Play Again</button>
                                <button style={this.props.nextWord ? {display: "block"}: {display: "none"}} type="button" class="btn btn-secondary" onClick={this.props.handleGoNextWord}>Next Word</button>
                                <button style={this.props.nextLevel ? {display: "block"}: {display: "none"}} type="button" class="btn btn-secondary" onClick={this.props.handleGoNextLevel}>Next Level</button>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}

export default Modal