import React from 'react';
import ReactDOM from 'react-dom';
import Quiz from './Quiz/quiz';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<Quiz />, root);
});
