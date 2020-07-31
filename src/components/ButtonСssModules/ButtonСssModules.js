import React from 'react';
import stylesNew from './ButtonNew.module.css';
import styles from './Button.module.css';

const ButtonSsModules = () => {
  return (
    <>
      <button className={`${styles.error} ${stylesNew.error}`}>Button Modules</button>
    </>
  )
};

export default ButtonSsModules
