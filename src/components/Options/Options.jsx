import PropTypes from 'prop-types';
import styles from './Options.module.css';
const Options = ({ onLeaveFeedback, totalFeedback, resetFeedback }) => {
  return (
    <div> 
      <button className={styles.button}type="button" onClick={() => onLeaveFeedback('good')}>Good</button>
      <button className={styles.button}type="button" onClick={() => onLeaveFeedback('neutral')}>Neutral</button>
      <button className={styles.button}type="button" onClick={() => onLeaveFeedback('bad')}>Bad</button>
      {totalFeedback > 0 && <button type="button" onClick={resetFeedback}>Reset</button>}
    </div>
  );
};

Options.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  totalFeedback: PropTypes.number.isRequired,
  resetFeedback: PropTypes.func.isRequired
};

export default Options;
