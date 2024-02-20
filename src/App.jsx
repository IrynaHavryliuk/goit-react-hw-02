import { useState, useEffect } from 'react';
import './App.css';
import Description from './components/Description/Description';
import { Feedback } from './components/Feedback/Feedback';
import Options from './components/Options/Options';
import Notification from './components/Notification/Notification';

const App = () => {
  const initialState = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  const [feedbackTypes, setFeedbackTypes] = useState(() => {
    const savedFeedback = localStorage.getItem('feedback');
    return savedFeedback ? JSON.parse(savedFeedback) : initialState;
  });

  const totalFeedback = feedbackTypes.good + feedbackTypes.neutral + feedbackTypes.bad;
  const positivePercentage = Math.round(((feedbackTypes.good + feedbackTypes.neutral) / totalFeedback) * 100);

  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedbackTypes));
  }, [feedbackTypes]);

  const updateFeedback = (feedbackType) => {
    setFeedbackTypes((prevState) => ({
      ...prevState,
      [feedbackType]: prevState[feedbackType] + 1
    }));
  };

  const resetFeedback = () => {
    setFeedbackTypes(initialState);
  };

  return (
    <div>
      <Description />
      <Options
        totalFeedback={totalFeedback}
        positivePercentage={positivePercentage}
        onLeaveFeedback={updateFeedback}
        resetFeedback={resetFeedback} // Правильно використовується resetFeedback
      />

      {totalFeedback > 0 ? (
        <Feedback feedbackTypes={feedbackTypes} positivePercentage={positivePercentage} />
      ) : (
        <Notification message="No feedback yet" />
      )}
    </div>
  );
};

export default App;
