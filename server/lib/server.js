var http = require("http");

module.exports = function() {
  var routes = new Map();

  var server = http.createServer(function(request, response) {
    var responseObject = {
      _status: 200,

      status(status) {
        this._status = status;

        return this;
      },

      send(json) {
        response.writeHead(this._status, {
          "Content-Type": "application/json"
        });
        response.end(JSON.stringify(json));
      }
    };

    for (let [route, handler] of routes) {
      let [method, url] = route.split("@");

      if (request.method == method) {
        if (request.url == url) {
          handler(responseObject, request);

          break;
        }

        if (url.includes("/:id")) {
          if (request.url.includes(url.replace("/:id", ""))) {
            let parts = request.url.split("/");

            handler(
              responseObject,
              Object.assign(request, { id: parts[parts.length - 1] })
            );

            break;
          }
        }
      }
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
      server.listen(port);

      console.log(`Server is listening on port ${port}.`);
    }
  };
};
