const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();

app.use(cors());

app.get('/api/v1/me', async (req, res) => {
  try {
    const response = await axios.get('https://startup.vercel.app/api/v1/me', {
      withCredentials: true,
    });
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred' });
  }
});

app.listen(3001, () => {
  console.log('Proxy server listening on port 3001');
});




