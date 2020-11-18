import React from 'react';
import styles from '../../../../public/styles.css';
import Size from './Size';
import Width from './Width';
import Comfort from './Comfort';
import Quality from './Quality';

function Comparisons() {
  return (
    <div>
      <Size />
      <Width />
      <Comfort />
      <Quality />
    </div>
  );
}

export default Comparisons;
