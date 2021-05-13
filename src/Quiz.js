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
    render() {
        const isQuizEnd = (quiz_position - 1 == quizData.quiz_questions.length);
        if (isQuizEnd) {
            return (
                <div>
                    <QuizEnd />
                    <QuizQuestion quiz_question={quizData.quiz_questions[this.state.quiz_position - 1]} />
                </div>
            );
        } else {
            return (
                <div>
                    <QuizQuestion quiz_question={quizData.quiz_questions[this.state.quiz_position - 1]} />
                </div>
            );
        }
    }
}
export default Quiz;