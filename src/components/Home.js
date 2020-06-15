import React, {Component} from 'react'
import daniel from '../images/daniel.jpeg';
import tigger from '../images/tigger.png';
import Meat from './Meat.js';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import Row from 'react-bootstrap/Row';
import Popover from 'react-bootstrap/Popover'

const popover = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">About Me</Popover.Title>
      <Popover.Content>
        Hello, my name is <strong>Daniel</strong>. I am 16 years old. I love eating <strong>meat</strong>!
        I enjoy the simple things in life, like reading Winnie the Pooh. My favorite character is Tigger! Boing!
      </Popover.Content>
      <Image src={tigger} className="tigger"/>
    </Popover>
)


export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            meatCount: 0
        }
    }

    renderMeat = () => {
        let array = []
        for (let i = 0; i < this.state.meatCount; i++) {
          array.push(<Meat deleteMeat={this.deleteMeat}/>)
        }
        return array
      }
    
      addMeat = () => {
        let num = this.state.meatCount
        
        this.setState({
          meatCount: ++num
        })
      }
    
      deleteMeat = () => {
        let num = this.state.meatCount
    
        this.setState({
            meatCount: --num
        })
    }

    render() {
        return(
            <div className="Home">
                <Card className="home-card">
                    <Card.Body>
                        <Card.Img src={daniel} className="daniel"/>
                        <h1>
                        Daniel Kim <Spinner animation="border" variant="dark"/>
                        </h1>
                        <OverlayTrigger trigger="click" placement='right' overlay={popover}>
                        <Button variant="success">Click Here to Learn More About Me!</Button>
                        </OverlayTrigger>
                    </Card.Body>
                </Card>
                <Button variant="warning" onClick={this.addMeat}>Click Here to Add More Steak</Button>
                <Row>
                    {this.renderMeat()}
                </Row>
            </div>
        )
    }
}