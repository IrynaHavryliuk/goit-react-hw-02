import styles from './Description.module.css';
const Description = () => {
    return (
      <div>
        <h2 className={styles.h2}>Sip Happens Café</h2>
              <p>Please leave your feedback about our service by selecting one of the options below.
</p>
      </div>
    );
  };

  export default function App() {
    return (
      <div>
        <Description />
      </div>
    );
  }