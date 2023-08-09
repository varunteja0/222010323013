// server.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

// Temporary storage for registered companies
const registeredCompanies = [];

// Route to register a company
app.post('/train/register', (req, res) => {
  const { companyName, ownerName, rollNo, ownerEmail, accessCode } = req.body;

  // Validate and save company registration details
  // You can add further validation and error handling here

  registeredCompanies.push({
    companyName,
    ownerName,
    rollNo,
    ownerEmail,
    accessCode
  });

  res.status(200).json({ message: 'Company registered successfully' });
});

// Route to get train schedule
app.get('/train/trains', (req, res) => {
  // Fetch train schedule data from your data source
  const trainData = [
    // Mock train data, replace with actual data
    {
      trainName: 'Chennai Exp',
      trainNumber: '2344',
      departureTime: {
        Hours: 21,
        Minutes: 35,
        Seconds: 0
      },
      seatsAvailable: {
        sleeper: 3,
        AC: 1
      },
      price: {
        sleeper: 2,
        AC: 5
      },
      delayedBy: 15
    },
    // Add more train data
  ];

  // Sort train data based on your requirements (price, tickets, departure time)
  // ...

  res.status(200).json(trainData);
});

app.get('/train/trains/:trainNumber', (req, res) => {
  const trainNumber = req.params.trainNumber;
  // Fetch train details based on trainNumber
  // ...

  res.status(200).json(trainDetails);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
