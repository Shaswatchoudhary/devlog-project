#!/bin/bash
echo "Starting DevLog server..."
export PORT=3000
node "$(dirname "$0")/../src/server.js"
