module.exports = function(response) {
  return {
    statusCode: 200,

    status(statusCode) {
      this.statusCode = statusCode;

      return this;
    },

    send(content) {
      var isJSON = typeof content == "object";

      response.writeHead(this.statusCode, {
        "Content-Type": isJSON ? "application/json" : "text/plain"
      });
      response.end(isJSON ? JSON.stringify(content) : content);
    }
  };
};
