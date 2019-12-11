module.exports = function (request, routes) {
  for (let [route, handler] of routes) {
    let [method, url] = route.split("@");

    if (request.method == method) {
      if (request.url == url) {
        return { handler };
      }

      let index = url.search(/\:\w/i);
      if (index != -1) {
        let regex = new RegExp(`${url.slice(0, index)}(.*)`, "i");
        let found = regex.exec(request.url);

        if (found) {
          return { handler, params: found[1] };
        }
      }
    }
  }

  return false;
}