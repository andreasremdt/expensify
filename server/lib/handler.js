var responder = require("./response");

module.exports = function handler(routes) {
  return function(request, response) {
    var served = false;
    var respond = responder(response);

    for (let [route, handler] of routes) {
      let [method, url] = route.split("@");

      if (request.method == method) {
        if (request.url == url) {
          handler(respond, request);
          served = true;

          break;
        }

        let index = url.search(/\:\w/i);
        if (index != -1) {
          let regex = new RegExp(`${url.slice(0, index)}(.*)`, "i");
          let found = regex.exec(request.url);

          if (found) {
            handler(respond, Object.assign(request, { param: found[1] }));
            served = true;

            break;
          }
        }
      }
    }

    if (!served) {
      respond.status(404).send("Not found");
    }
  };
};
