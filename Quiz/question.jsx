import React from 'react';

export default class Question extends React.Component {
  render() {
    const { question, questionNum, update, onSubmit } = this.props;
    return (
      <div>
        <h2>{question.question}</h2>
        <ul className='question-list'>
          {question.answers.map((answer, i) =>
            <li key={`${questionNum}-${i}`}>
              <input type='radio' name={`question-${questionNum}`} id={`question-${questionNum}-answer`} value={i} onChange={update} defaultChecked={false}></input>
              <label for={`question-${questionNum}-answer`}>{answer.label}</label>
            </li>
          )}
        </ul>
        <button onClick={onSubmit}>Submit</button>
      </div>
    );
  }
}
