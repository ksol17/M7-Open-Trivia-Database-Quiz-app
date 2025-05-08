import React from 'react';

const ResultsSection = ({ name, isCorrect, correctAnswer, onRestart }) => {
  return (
    <div className="results-section">
      <h3>{isCorrect ? `${name}, you got it right!` : `${name}, you got it wrong!`}</h3>
      {!isCorrect && <p>The correct answer was: {correctAnswer}</p>}
      <button onClick={onRestart}>Try Another Question</button>
    </div>
  );
};

export default ResultsSection;
