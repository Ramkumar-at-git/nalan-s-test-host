const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());

app.post('/api/submit-order', async (req, res) => {
  try {
    // Forward the request to the Django backend
    const response = await axios.post('http://localhost:8000/api/orders/', req.body);
    res.json(response.data);
  } catch (error) {
    console.error('Error forwarding request:', error);
    res.status(500).json({ message: 'Error processing request' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
