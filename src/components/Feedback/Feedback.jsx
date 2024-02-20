const Feedback = ({ feedbackTypes, positivePercentage }) => {
  const { good, neutral, bad } = feedbackTypes;

  return (
    <div>
      <h2>Feedback</h2>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {good + neutral + bad}</p>
      <p>Positive Percentage: {positivePercentage}%</p>
    </div>
  );
};

export { Feedback };
