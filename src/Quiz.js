import React, { Component } from 'react';
let quizData = require('./quiz_data.json');
class Quiz extends Component{
    constructor(props) {
        super(props);
        this.state = {
            quiz_position: 1,
            message: quizData['quiz_questions'][0]['instruction_text'],
            idp: quizData['quiz_questions'][0]['id']
        }
        
    }
   
    render() {
        return (
            <div>
                <div className="QuizQuestion">
                    {this.state.idp}<br/> {this.state.message}
                </div>
            </div>
        );
    }
}
export default Quiz;