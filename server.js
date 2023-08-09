// server.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Sample train data
const trainSchedule = [
  { trainName: 'Chennai Express', trainNumber: '2344', /* ... */ },
  { trainName: 'Hyderabad Express', trainNumber: '2341', /* ... */ },
  // ...
];

app.get('/api/trains', (req, res) => {
  res.status(200).json(trainSchedule);
});

app.get('/api/trains/:trainNumber', (req, res) => {
  const trainNumber = req.params.trainNumber;
  const trainDetails = trainSchedule.find(train => train.trainNumber === trainNumber);
  
  if (!trainDetails) {
    res.status(404).json({ message: 'Train not found' });
  } else {
    res.status(200).json(trainDetails);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
