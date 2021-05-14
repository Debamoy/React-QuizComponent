import React, { Component } from 'react';
import QuizQuestionButton from './QuizQuestionButton.js';
class QuizQuestion extends Component {
    constructor(props) {
        super(props);

    }
    handleClick(buttonText) {
        if (buttonText === this.props.quiz_question.answer) {
            this.props.showNextQuestionHandler(); // parents function call func name == parents prop name
        }
    }
    render() {
        console.log(this.props.quiz_question.instruction_text);
        console.log(this.props.quiz_question.answer_options[0]);
        return (
            <main>
                <section>
                    <p>
                        {this.props.quiz_question.instruction_text}
                    </p>
                </section>
                <section className="buttons">
                    <ul>
                        {
                            this.props.quiz_question.answer_options.map((answer_option, index) => {
                                return (<QuizQuestionButton clickHandler={this.handleClick.bind(this)} button_text={answer_option} key={index} />);
                            })
                        }
                    </ul>
                </section>
            </main>
        );
    }
}
export default QuizQuestion;