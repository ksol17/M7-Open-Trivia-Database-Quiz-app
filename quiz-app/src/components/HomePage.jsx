import React, { useState } from 'react';

const HomePage = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    difficulty: ''
  });
  
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.category || !formData.difficulty) {
      setError('All fields are required.');
      return;
    }
    setError('');
    onSubmit(formData);  // Send form data to parent component
  };

  return (
    <div className="home-page">
      <h1>Welcome to the Quiz App!</h1>
      <p>Fill out the form below to start the quiz:</p>
      <form onSubmit={handleSubmit}>
        <label>
          Your Name:
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleInputChange} 
            required
          />
        </label>
        <br />

        <label>
          Category:
          <select 
            name="category" 
            value={formData.category} 
            onChange={handleInputChange} 
            required
          >
            <option value="">Select Category</option>
            <option value="9">General Knowledge</option>
            <option value="21">Sports</option>
            <option value="18">Science</option>
            <option value="23">History</option>
          </select>
        </label>
        <br />

        <label>
          Difficulty:
          <select 
            name="difficulty" 
            value={formData.difficulty} 
            onChange={handleInputChange} 
            required
          >
            <option value="">Select Difficulty</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </label>
        <br />

        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Start Quiz</button>
      </form>
    </div>
  );
};

export default HomePage;
