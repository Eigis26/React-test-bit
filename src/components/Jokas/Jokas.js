import React from 'react';
import styles from './Jokas.module.css';


const Jokas = ({setup, del, joke}) => {

  return (

      <div className={styles.box}>
     <p>{setup || del ? setup && del : joke}</p>

      </div>

  );

};



export default Jokas;
