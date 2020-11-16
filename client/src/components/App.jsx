import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Reviews from './Reviews';
import Total from './Total';
import Breakdown from './Breakdown';
import Opinions from './Opinions';

function App() {
  const [shoeData, setShoeData] = useState([]);
  const randomId = Math.floor(Math.random() * 100) + 1;

  useEffect(() => {
    axios
      .get(`/api/shoes/${randomId}/newest`)
      .then((res) => setShoeData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>Ratings & Reviews</h1>
      <div className='main'>
        <div>
          <Total id={randomId} />
          <Breakdown />
          <hr />
          <Opinions />
        </div>
        {shoeData.length > 0 && <Reviews shoes={shoeData} />}
      </div>
    </div>
  );
}

export default App;
