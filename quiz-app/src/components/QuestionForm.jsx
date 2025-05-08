import React, { useState, useEffect } from 'react';

const QuestionForm = ({ formData, onAnswerSubmit }) => {
  const [questionData, setQuestionData] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchQuestion = async () => {
      try {
        const response = await fetch(`https://opentdb.com/api.php?amount=1&category=${formData.category}&difficulty=${formData.difficulty}&type=multiple`);
        const data = await response.json();
        setQuestionData(data.results[0]);
      } catch (err) {
        setError('Failed to fetch question. Please try again later.');
      }
    };
    fetchQuestion();
  }, [formData]);

  const handleAnswerChange = (e) => {
    setSelectedAnswer(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedAnswer) {
      setError('Please select an answer.');
      return;
    }
    setError('');
    onAnswerSubmit(selectedAnswer === questionData.correct_answer);
  };

  return (
    <div className="question-form">
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {questionData ? (
        <form onSubmit={handleSubmit}>
          <h3>{questionData.question}</h3>
          {questionData.incorrect_answers.concat(questionData.correct_answer).map((answer, index) => (
            <label key={index}>
              <input 
                type="radio" 
                name="answer" 
                value={answer} 
                onChange={handleAnswerChange} 
              />
              {answer}
            </label>
          ))}
          <button type="submit">Submit Answer</button>
        </form>
      ) : (
        <p>Loading question...</p>
      )}
    </div>
  );
};

export default QuestionForm;
