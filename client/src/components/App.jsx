import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Reviews from './Reviews';
import Total from './Total';

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
      <h1>Reviews</h1>
      <Total id={randomId} />
      {shoeData.length > 0 && <Reviews shoes={shoeData} />}
    </div>
  );
}

export default App;
