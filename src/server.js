require('dotenv').config();
const http = require('http');
const fs = require('fs');
const path = require('path');

const logs = [];
const PORT = process.env.PORT || 3000;

const logFile = path.join(__dirname, "../logs/server.log");

// make sure logs folder exists
const logDir = path.dirname(logFile);
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir, { recursive: true });
}

function writeLog(message) {
  fs.appendFileSync(logFile, message + '\n');
}

function getLogs() {
  return { total: logs.length, logs };
}

function addLog(message) {
  const entry = {
    id: logs.length + 1,
    message,
    timestamp: new Date().toISOString()
  };

  logs.push(entry);
  writeLog(`${entry.id} | ${entry.message} | ${entry.timestamp}`);
  return entry;
}

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');

  console.log(`${req.method} ${req.url}`);

  if (req.method === 'GET' && req.url === '/logs') {
    res.end(JSON.stringify(getLogs()));
  } else if (req.method === 'POST' && req.url === '/log') {
    addLog('New entry at ' + new Date().toISOString());
    res.end(JSON.stringify({ message: 'Log added' }));
  } else {
    res.statusCode = 404;
    res.end(JSON.stringify({ error: 'Not found' }));
  }
});

server.listen(PORT, () => {
  console.log(`DevLog server running on port ${PORT}`);
});