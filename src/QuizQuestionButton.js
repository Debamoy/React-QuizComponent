import React, { Component } from 'react';
class QuizQuestionButton extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <li>
                <button>{this.props.button_txt}</button>
            </li>
        );
    }
}
export default QuizQuestionButton;