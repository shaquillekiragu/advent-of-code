#!/bin/bash
if [ -z "$1" ]; then
  echo "Usage: npm start -- <filename>"
  echo "Example: npm start -- day-1-secret-entrance.js"
  exit 1
fi
node "dist/tasks/$1"
