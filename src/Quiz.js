import React, { Component } from 'react';
let quizData = require('./quiz_data.json');
class Quiz extends Component{
    constructor(props) {
        super(props);
        thios.state = {
            quiz_position: 1
        }
    }
    render() {
        return (
            <div>
                Quiz
            </div>
        );
    }
}
export default Quiz;