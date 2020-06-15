import React, {Component} from 'react';
import Card from 'react-bootstrap/Card';
import Toast from 'react-bootstrap/Toast';
import CardColumns from 'react-bootstrap/CardColumns';
// importing images to render onto the page
import puzzle1 from '../images/puzzle1.jpeg';
import puzzle2 from '../images/puzzle2.jpeg';
import puzzle3 from '../images/puzzle3.jpeg';
import puzzle4 from '../images/puzzle4.jpeg';
import puzzle5 from '../images/puzzle5.jpeg';
import puzzle6 from '../images/puzzle6.jpeg';
import puzzle7 from '../images/puzzle7.jpeg';
import puzzle8 from '../images/puzzle8.jpeg';
import puzzle9 from '../images/puzzle9.jpeg';
import puzzle10 from '../images/puzzle10.jpeg';
import puzzle11 from '../images/puzzle11.jpeg';
import puzzle12 from '../images/puzzle12.jpeg';
import puzzle13 from '../images/puzzle13.jpeg';

export default class Puzzle extends Component {
    constructor() {
        super();
        this.state = {
            showToast: true,
            imgArray: [puzzle1, puzzle2, puzzle3, puzzle4, puzzle5, puzzle6, puzzle7, puzzle8, puzzle9, puzzle10, puzzle11, puzzle12, puzzle13],
            descriptionArray: [
                "Wreck-It Ralph! This one was a fun piece to work on!",
                "Wish we had Coco's head...and hands :(",
                "Rooby Dooby Doo! This one gave us a big headache....",
                "Sometimes I wish I could be a dinosaur, so that way I could see how a real carnivore eats! ",
                "Fish are delish!",
                `"Toto, I've got a feeling we're not in Kansas anymore..."`,
                "Tigers and tiggers are one-of-a-kind. I like my fruit snacks too",
                "You've yee'd your last haw, pardner",
                "I'm also learning how to play the drums, piano, and ukulele!",
                "Bonjour mes amis, je m'appelle Daniel",
                "Oui",
                "Dogs can be scary, but puppies are great fun :)",
                "Pandas have big bellies, I wish I could touch their bellies and laugh along with them as they eat too!"
            ]
        }
    }

    renderToast = () => {
        if (this.state.showToast) {
            return (
                <Toast autohide={true} delay={4000} className="puzzle-toast" onClick={this.hideToast}>
                    <Toast.Header>
                        <strong>Daniel's Puzzle Adventures!</strong>
                    </Toast.Header>
                    <Toast.Body>
                       This is just a collection of puzzles that I've finished putting together. Some of them were missing pieces though! :(
                    </Toast.Body>
                </Toast>
            )
        } else {
            return
        }
    }

    renderPuzzles = () => {
        let array = this.state.imgArray
        let descrip = this.state.descriptionArray
        let newArr = []

        for (let i = 0; i < array.length; ++i) {
            newArr.push(
                <Card className="puzzle-pic">
                    <Card.Body>
                        <Card.Img src={array[i] }/>
                        {descrip[i]}
                    </Card.Body>
                </Card>
            )
        }
        
        return newArr
    }

    hideToast = () => {
        this.setState({
            showToast: !this.state.showToast
        })
    }

    render() {
        return(
            <div className="Puzzle">
                {this.renderToast()}
                <div>
                    <CardColumns>
                        {this.renderPuzzles()}
                    </CardColumns>
                </div>
            </div>
        )
    }
}