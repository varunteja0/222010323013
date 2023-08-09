import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const TrainList = () => {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    axios.get('/api/trains')
      .then(response => {
        setTrains(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h2>All Trains Schedule</h2>
      <ul>
        {trains.map(train => (
          <li key={train.trainNumber}>
            <Link to={`/train/${train.trainNumber}`}>
              {train.trainName} (Train Number: {train.trainNumber})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrainList;
