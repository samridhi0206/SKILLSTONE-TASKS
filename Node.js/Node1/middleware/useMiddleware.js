const express = require('express');
const app = express();

// Define a middleware function
const myMiddleware = (req, res, next) => {
  console.log('This is my middleware function!');
  next();
};

// Use the middleware function with app.use()
app.use(myMiddleware);

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});