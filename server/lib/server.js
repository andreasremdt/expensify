var http = require("http");
var handler = require("./handler");

module.exports = function() {
  var routes = new Map();
  var server = http.createServer(handler(routes));

  server.on("error", function(error) {
    if (error.code == "EADDRINUSE") {
      console.error(
        `\x1b[31mSome other process is blocking port ${error.port}. Please specify a different port or exit the running process first.\x1b[89m`
      );

      server.close();
    }
  });

  return {
    get(url, handler) {
      routes.set(`GET@${url}`, handler);

      return this;
    },

    post(url, handler) {
      routes.set(`POST@${url}`, handler);

      return this;
    },

    delete(url, handler) {
      routes.set(`DELETE@${url}`, handler);

      return this;
    },

    patch(url, handler) {
      routes.set(`PATCH@${url}`, handler);

      return this;
    },

    start(port = 3000) {
      server.listen(port, function() {
        console.log(`Server is listening on port ${port}.`);
      });
    }
  };
};
