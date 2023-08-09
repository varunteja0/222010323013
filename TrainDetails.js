// src/components/TrainDetails.js

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const TrainDetails = () => {
  const { trainNumber } = useParams();
  const [trainDetails, setTrainDetails] = useState(null);

  useEffect(() => {
    axios.get(`/api/trains/${trainNumber}`)
      .then(response => {
        setTrainDetails(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [trainNumber]);

  return (
    <div>
      <h2>Train Details</h2>
      {trainDetails ? (
        <div>
          <p>Train Name: {trainDetails.trainName}</p>
          <p>Train Number: {trainDetails.trainNumber}</p>
          {/* Display other train details */}
        </div>
      ) : (
        <p>Loading train details...</p>
      )}
    </div>
  );
};

export default TrainDetails;
