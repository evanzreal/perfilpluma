#!/bin/bash

# Function to check if a process is running on a given port
is_port_used() {
  lsof -i :$1 -t &> /dev/null
  return $?
}

# Kill any process currently using port 5173
if is_port_used 5173; then
  echo "Port 5173 is in use. Killing the existing process..."
  lsof -i :5173 -t | xargs kill
  sleep 1
fi

# Navigate to the project directory and start the server
echo "Starting MarketingMaster 2 application..."
node serveapp.js