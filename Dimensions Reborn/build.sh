#!/bin/bash

# Bakugan Dimensions Recreation Project Build Script

echo "===== Bakugan Dimensions Recreation Build Script ====="
echo "Starting build process..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "Error: Node.js is not installed. Please install Node.js before proceeding."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "Error: npm is not installed. Please install npm before proceeding."
    exit 1
fi

# Install dependencies
echo "Installing dependencies..."
npm install

# Check if installation was successful
if [ $? -ne 0 ]; then
    echo "Error: Failed to install dependencies. Please check your internet connection and try again."
    exit 1
fi

# Build the project
echo "Building the project..."
npm run build

# Check if build was successful
if [ $? -ne 0 ]; then
    echo "Error: Build failed. Please check the error messages above."
    exit 1
fi

echo "Build completed successfully!"
echo "The built files are available in the 'dist' directory."

# Ask if user wants to start the development server
read -p "Do you want to start the development server? (y/n): " start_server

if [ "$start_server" = "y" ] || [ "$start_server" = "Y" ]; then
    echo "Starting development server..."
    npm start
else
    echo "To start the server later, run 'npm start'"
fi

echo "===== Build Script Completed ====="