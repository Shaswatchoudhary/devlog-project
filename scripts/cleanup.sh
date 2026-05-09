#!/bin/bash

echo "=== DevLog Cleanup ==="
echo "Date: $(date)"
echo "User: $(whoami)"
echo ""

# Stop server
echo "Stopping server..."
pm2 stop devlog 2>/dev/null || echo "Server not running"

# Show disk usage
echo ""
echo "Project size:"
du -sh ~/devlog-project/

echo ""
echo "Log files:"
ls -lh ~/devlog-project/logs/

# Clear logs older than 7 days
find ~/devlog-project/logs -name "*.log" -mtime +7 -delete
echo "Old logs cleared."

# Restart server
pm2 restart devlog 2>/dev/null || pm2 start ~/devlog-project/src/server.js --name devlog

echo ""
echo "Done! Server restarted."
pm2 status
