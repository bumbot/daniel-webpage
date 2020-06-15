import React, {Component} from 'react'
import steak from '../images/steak.jpg'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'

export default class Meat extends Component {
    render() {
        return (
            <div className="meat">
                <Container>
                    <Image src={steak} className="steak"/>
                    <Button variant="warning" onClick={this.props.deleteMeat}>Delete</Button>
                </Container>
            </div>
        )
    }
}