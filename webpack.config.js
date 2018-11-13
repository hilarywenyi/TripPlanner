//this is our webpack configuration file
//our start point
const path = require('path');
module.exports = {
  mode: "development",
  entry: './src/index.js', // the starting point for our program
  output: {
    path: path.join(__dirname, '/public'), // the absolute path for the directory where we want the output to be placed
    filename: 'bundle.js' // the name of the file that will contain our output - we could name this whatever we want, but bundle.js is typical
  }
}