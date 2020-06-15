import React, {Component} from 'react';
import Square from './Square.js';
import Button from 'react-bootstrap/Button';
import Toast from 'react-bootstrap/Toast';

export default class Game extends Component {
    constructor() {
        super()
        this.state = {
            currentPiece: "X",
            win: false,
            board: [
                null, false, null,
                false, "tic-tac-toe!!!", false,
                null, false, null
            ]
        }
    }

    removeToast = () => {
        this.setState({
            win: false
        })
    }

    renderWinMessage = () => {
        if (this.state.win) {
            return (
                <Toast onClick={this.removeToast} className="win-toast">
                    <Toast.Header>
                        CONGRATULATIONS
                    </Toast.Header>
                    <Toast.Body>
                        {(this.state.currentPiece === "X") ? "O" : "X"} is the winner!
                    </Toast.Body>
                </Toast>
            )
        }
    }

    checkWin = (currentBoard, piece) => {
        const [one, two, three,
               four, five, six,
               seven, eight, nine] = currentBoard;
        
        //check win conditions
        if (one === two && two === three) {
            return true
        } else if (four === five && five === six) {
            return true
        } else if (seven === eight && eight === nine) {
            return true
        } else if (one === four && four === seven) {
            return true
        } else if (two === five && five === eight) {
            return true
        } else if (three === six && six === nine) {
            return true
        } else if (one === five && five === nine) {
            return true
        } else if (three === five && five === seven) {
            return true
        } else if (one && two && three && four && five && six && seven && eight && nine) {
            // if all board pieces are occupied, match is a draw
            alert("Match is a draw!")
        } else {
            return false
        }

    }

    squareClick = (event) => {
        let id = parseInt(event.target.id)
        if (event.target.innerText === "X" || event.target.innerText === "O") {
            alert("Can't change a non-empty tile!")
            return
        } else {
            let newBoard = [...this.state.board];
            let piece = this.state.currentPiece

            event.target.innerText = piece

            for (let i = 0; i < newBoard.length; ++i) {
                if (i === id) {
                    newBoard[i] = piece
                }
            }

            this.setState({
                board: [...newBoard]
            })

            if (this.checkWin(newBoard, piece)) {
                this.setState({
                    win: true
                })
            }
        }

        (this.state.currentPiece === "X") ?
            this.setState({
                currentPiece: "O"
            })
        :
            this.setState({
                currentPiece: "X"
            })
    }

    renderSquares = (x=0) => {
        let array = []

        for (let i = 0; i < 3; i++) {
            array.push(<Square id={`${x+i}`} squareClick={this.squareClick} checkWin={this.checkWin}/>)
        }
        return array
    }

    clearBoard = () => {
        window.location.reload(false);
    }


    render() {
        return (
            <div className="Game">
                <div className="Board">
                    {this.renderWinMessage()}
                    <div className="board-title">
                        <h1>Tic-Tac-Toe</h1>
                        <h3>Current Piece is: {this.state.currentPiece}
                            <Button className="clear-button" variant="warning" onClick={this.clearBoard}>
                                Clear the Board
                            </Button>
                        </h3>
                    </div>
                    <div className="board-row">
                        {this.renderSquares()}
                    </div>
                    <div className="board-row">
                        {this.renderSquares(3)}
                    </div>
                    <div className="board-row">
                        {this.renderSquares(6)}
                    </div>
                </div>
            </div>
        )
    }
}