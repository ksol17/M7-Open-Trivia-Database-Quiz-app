import React, { useState } from 'react';
import HomePage from './components/HomePage';
import QuestionForm from './components/QuestionForm';
import ResultsSection from './components/ResultsSection';

const App = () => {
  const [formData, setFormData] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [showResults, setShowResults] = useState(false);

  const handleFormSubmit = (data) => {
    setFormData(data);
    setShowResults(false);
  };

  const handleAnswerSubmit = (correct) => {
    setIsCorrect(correct);
    if (correct) {
      setCorrectAnswer('');
    } else {
      setCorrectAnswer('Sample Correct Answer');  // This should be fetched from the API response
    }
    setShowResults(true);
  };

  const handleRestart = () => {
    setFormData(null);
    setShowResults(false);
  };

  return (
    <div className="app">
      {!formData ? (
        <HomePage onSubmit={handleFormSubmit} />
      ) : showResults ? (
        <ResultsSection
          name={formData.name}
          isCorrect={isCorrect}
          correctAnswer={correctAnswer}
          onRestart={handleRestart}
        />
      ) : (
        <QuestionForm formData={formData} onAnswerSubmit={handleAnswerSubmit} />
      )}
    </div>
  );
};

export default App;


