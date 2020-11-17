import React from 'react';
import { ReviewProvider } from './ReviewContext';
import styles from '../../../public/styles.css';
import Reviews from './Reviews';
import Total from './Total';
import Breakdown from './Breakdown';
import Opinions from './Opinions';

function App() {
  return (
    <ReviewProvider>
      <section className={styles.container}>
        <div>
          <h5>RATINGS & REVIEWS</h5>
          <div className={styles.main}>
            <div>
              <Total />
              <Breakdown />
              <Opinions />
            </div>
            <Reviews />
          </div>
        </div>
      </section>
    </ReviewProvider>
  );
}

export default App;
