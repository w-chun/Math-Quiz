import React from 'React';
import Question from './question';
import data from '../quiz.json';

export default class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quiz: data,
      questionNum: 0,
      answers: 0,
      score: 0
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  handleSubmit() {
    if (this.state.questionNum < this.state.quiz.questions.length) {
      this.setState({'questionNum': this.state.questionNum + 1});
      let score = this.state.quiz.questions[this.state.questionNum].answers[this.state.answers].point;
      let totalScore = this.state.score;
      if (score === 1) {
        alert('Correct Answer!');
      } else {
        alert('Wrong Answer!');
      }
      totalScore += score;
      this.setState({'score': totalScore});
    }
  }

  update(e) {
    let answer = parseInt(e.target.value);
    this.setState({'answers': answer});
  }

  render() {
    let questions;
    const { quiz, questionNum, answers } = this.state;
    if (quiz.questions) {
      questions = <div>
                    <Question
                      question={quiz.questions[questionNum]}
                      questionNum={questionNum}
                      update={this.update}
                      onSubmit={this.handleSubmit} />
                  </div>;
    }
    if (quiz.questions && this.state.questionNum === this.state.quiz.questions.length) {
      return (
        <div>
            <h1>Math Quiz</h1>
            Your final score is {this.state.score} out of 10.
          </div>
      );
    } else {
      return (
        <div>
          <h1>Math Quiz</h1>
          Score: {this.state.score}
          {questions}
        </div>
      );
    }
  }
}
