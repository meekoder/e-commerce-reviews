import React from 'react';
import styles from '../../../public/styles.css';

function Menu() {
  return (
    <ul className={styles.menu}>
      <li>
        <button>NEWEST</button>
      </li>
      <li>
        <button>HELPFUL</button>
      </li>
      <li>
        <button>RELEVANT</button>
      </li>
    </ul>
  );
}

export default Menu;
