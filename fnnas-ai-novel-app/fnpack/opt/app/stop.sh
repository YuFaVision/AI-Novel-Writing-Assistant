#!/bin/bash

# Stop the server
if [ -f /opt/app/server/server.pid ]; then
  kill $(cat /opt/app/server/server.pid)
  rm /opt/app/server/server.pid
fi

# Stop the frontend
if [ -f /opt/app/client/frontend.pid ]; then
  kill $(cat /opt/app/client/frontend.pid)
  rm /opt/app/client/frontend.pid
fi

echo "AI Novel Writing Assistant stopped successfully!"
