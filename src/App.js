import React, {useState} from 'react';
import './App.css';
import  QuoteCard from './component/QuoteCard.js';
import axios from 'axios';

function App() {
  const [simpsons, setSimpson] = useState();
  const simpsonsGet = () => {
    // Send the request
    axios
      .get('https://simpsons-quotes-api.herokuapp.com/quotes')
      // Extract the DATA from the received response
      .then(res => setSimpson(res.data[0]))
  };

  return (
    <div className="App">
      <button onClick={simpsonsGet}>Quote Get</button>
      <QuoteCard {...simpsons} />
    </div>
  );
}

export default App;
