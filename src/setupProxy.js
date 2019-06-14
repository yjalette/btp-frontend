const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(proxy('/api', { target: 'http://ec2-3-121-233-42.eu-central-1.compute.amazonaws.com', //changeOrigin: true
 }));
};