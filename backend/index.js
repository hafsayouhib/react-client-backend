const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(express.urlencoded({  extended: true }));



app.use(cors());

app.post('/submit', (req, res) => {
  const formData = req.body;
  console.log('Received form data:', formData);
  res.send('Form data received successfully!');

  const filePath = path.join(__dirname, 'data', 'formData.json');
  fs.writeFileSync(filePath, JSON.stringify(formData,null,2), (err) => {
    if (err) {
      console.error('Error writing form data:', err);
      res.status(500).send('Error  in saving form data');
    } else {
      console.log('Form data saved successfully!');
      res.send('Form data received and saved successfully!');
    }
  
  });
})





app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});





