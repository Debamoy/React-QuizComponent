import React, { Component } from 'react';
import QuizEnd from './QuizEnd.js';
import QuizQuestion from './QuizQuestion.js';
let quizData = require('./quiz_data.json');
class Quiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quiz_position: 1,
        }
        this._message = quizData['quiz_questions'][0]['instruction_text'];
        this._idp = quizData['quiz_questions'][0]['id'];
    }
    get message() {
        return this._message;
    }
    get idp() {
        return this._idp;
    }
    showNextQuestion() {
        this.setState({ quiz_position: this.state.quiz_position + 1 });
    }
    render() {
        const isQuizEnd = ((this.state.quiz_position - 1 == quizData.quiz_questions.length)) ? true : false;
        if (isQuizEnd) {
            return (
                <div>
                    <QuizEnd />
                </div>
            );
        } else {
            return (
                <div>
                    <QuizQuestion showNextQuestionHandler={this.showNextQuestion.bind(this)} quiz_question={quizData.quiz_questions[this.state.quiz_position - 1]} />
                </div>
            );
        }

    }
}
export default Quiz;