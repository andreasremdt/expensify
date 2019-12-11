var responder = require("./response");
var matchRoute = require("./match-route");

module.exports = function handler(routes) {
  return function(request, response) {
    var respond = responder(response);
    var data = [];

    request.on("data", (chunk) => data.push(chunk));

    request.on("end", () => {
      var match = matchRoute(request, routes);

      if (!match) {
        respond.status(404).send("Not found");
      } else {
        match.handler(respond, {
          id: match.params,
          body: data.length ? JSON.parse(data) : {}
        });
      }
    });
  };
};
