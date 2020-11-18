import React from 'react';
import { ReviewProvider } from './ReviewContext';
import styles from '../../../public/styles.css';
import Reviews from './Reviews';
import Total from './Total';
import Breakdown from './Breakdown';
import Opinions from './Opinions';
import Buttons from './writeReview/Buttons';
import Comparisons from './comparisons/Comparisons';
import Menu from './Menu';

function App() {
  return (
    <ReviewProvider>
      <section className={styles.container}>
        <h5>RATINGS & REVIEWS</h5>
        <div className={styles.main}>
          <div>
            <Total />
            <Breakdown />
            <Opinions />
            <Comparisons />
          </div>
          <div className={styles.listBtn}>
            <Menu />
            <Reviews />
            <Buttons />
          </div>
        </div>
      </section>
    </ReviewProvider>
  );
}

export default App;
