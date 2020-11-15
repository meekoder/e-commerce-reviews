import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Reviews from './Reviews';

function App() {
  const [shoeData, setShoeData] = useState([]);

  useEffect(() => {
    axios
      .get('/api/shoes')
      .then((res) => setShoeData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>Reviews</h1>
      {shoeData.length > 0 && <Reviews shoes={shoeData} />}
    </div>
  );
}

export default App;
