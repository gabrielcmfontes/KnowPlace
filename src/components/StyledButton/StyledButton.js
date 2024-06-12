import React from 'react';
import styles from './StyledButton.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLockOpen } from '@fortawesome/free-solid-svg-icons';

const StyledButton = () => {
  return (
    <button className={styles.styledButton}>
      <div className={styles.buttonContent}>
        <FontAwesomeIcon icon={faLockOpen} />
        Free Now
      </div>
    </button>
  );
};

export default StyledButton;
