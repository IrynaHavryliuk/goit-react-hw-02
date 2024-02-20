const Feedback = ({ feedbackTypes, positivePercentage }) => {
  const { good, neutral, bad } = feedbackTypes;

  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {good + neutral + bad}</p>
      <p>Positive: {positivePercentage}%</p>
    </div>
  );
};

export { Feedback };
