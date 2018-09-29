const { init } = require('genuine-mock-server');

init({
  port: 8080,
  pathToFiles: './mocks',
  filePattern: '*.js)',
});
