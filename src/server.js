require('dotenv').config();
const http = require('http');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3000;
const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost:27017/devlog';

// MongoDB Log Schema
const logSchema = new mongoose.Schema({
  message: String,
  timestamp: { type: Date, default: Date.now }
});
const Log = mongoose.model('Log', logSchema);

// Connect to MongoDB
mongoose.connect(MONGO_URL)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB error:', err));

const server = http.createServer(async (req, res) => {
  res.setHeader('Content-Type', 'application/json');

  console.log(`${req.method} ${req.url}`);

  if (req.method === 'GET' && req.url === '/logs') {
    try {
      const logs = await Log.find().sort({ timestamp: -1 });
      res.end(JSON.stringify({ total: logs.length, logs }));
    } catch (err) {
      console.error('GET /logs error:', err);
      res.statusCode = 500;
      res.end(JSON.stringify({ error: 'Failed to fetch logs' }));
    }

  } else if (req.method === 'POST' && req.url === '/log') {
    try {
      const log = new Log({ message: 'Entry at ' + new Date().toISOString() });
      await log.save();
      res.end(JSON.stringify({ message: 'Log saved to MongoDB' }));
    } catch (err) {
      console.error('POST /log error:', err);
      res.statusCode = 500;
      res.end(JSON.stringify({ error: 'Failed to save log' }));
    }

  } else {
    res.statusCode = 404;
    res.end(JSON.stringify({ error: 'Not found' }));
  }
});

server.listen(PORT, () => {
  console.log(`DevLog running on port ${PORT}`);
});