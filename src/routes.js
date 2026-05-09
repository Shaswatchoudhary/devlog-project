const logFile = path.join(__dirname, "../logs/server.log");
const logs = [];




function getLogs() {
  return { total: logs.length, logs };
}

function addLog(message) {
  logs.push({
    id: logs.length + 1,
    message,
    timestamp: new Date().toISOString()
  });
}

module.exports = { getLogs, addLog };