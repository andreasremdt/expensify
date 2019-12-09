module.exports = {
  index(response) {
    response.send({ text: "Hello world" });
  },

  show(response, request) {
    response.send({ text: "single" });
  },

  create(response) {},

  update(response) {},

  destroy(response) {}
};
