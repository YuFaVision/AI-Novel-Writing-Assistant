#!/bin/bash

# Create logs directory if it doesn't exist
mkdir -p logs

# Start the server
cd /opt/app/server
node index.js > ../logs/server.log 2>&1 &
echo $! > server.pid

# Start the frontend
cd /opt/app/client
npm run dev > ../logs/frontend.log 2>&1 &
echo $! > frontend.pid

echo "AI Novel Writing Assistant started successfully!"
