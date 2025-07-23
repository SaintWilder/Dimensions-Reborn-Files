# Bakugan Dimensions Recreation - Installation Guide

This guide will help you set up and run the Bakugan Dimensions Recreation project on your local machine.

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)
- Git

## Installation Steps

### 1. Clone the Repository

```bash
git clone https://github.com/username/bakugan-dimensions-recreation.git
cd bakugan-dimensions-recreation
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory with the following content:

```
NODE_ENV=development
PORT=3000
```

### 4. Start the Development Server

```bash
npm start
```

This will start the development server at `http://localhost:3000`.

## Build for Production

To create a production build:

```bash
npm run build
```

This will generate optimized files in the `dist` directory.

## Project Structure

- `src/frontend/js`: JavaScript files including React components
- `src/frontend/css`: CSS stylesheets
- `src/frontend/index.html`: Main HTML template
- `src/assets`: Static assets like images and sounds

## Available Scripts

- `npm start`: Start the development server
- `npm run build`: Create a production build
- `npm test`: Run tests
- `npm run lint`: Run linting

## Troubleshooting

### Common Issues

1. **Node version mismatch**
   - Solution: Use nvm to install the correct Node.js version

2. **Port already in use**
   - Solution: Change the PORT in the .env file

3. **Missing dependencies**
   - Solution: Run `npm install` again

### Getting Help

If you encounter any issues not covered here, please:
1. Check the [GitHub issues](https://github.com/username/bakugan-dimensions-recreation/issues)
2. Create a new issue with detailed information about your problem

## Next Steps

After installation, you might want to:
1. Explore the game features
2. Check out the [User Guide](./user_guide.md) for gameplay instructions
3. Review the [Contributing Guide](./contributing.md) if you want to contribute to the project