import React, {Component} from 'react'

export default class Square extends Component {
    render() {
        return(
            <div>
                <button id={this.props.id} className="square-box" onClick={(event) => this.props.squareClick(event)}/>
            </div>
        )
    }
}