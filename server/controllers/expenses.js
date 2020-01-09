var db = require("../lib/database");

module.exports = {
  index(response) {
    db.expenses.find({}, function(err, results) {
      if (err) {
        return response.status(500).send(err);
      }

      response.send(results);
    });
  },

  show(response, request) {
    db.expenses.findOne({ _id: request.id }, function(err, results) {
      if (err) {
        return response.status(500).send(err);
      }

      response.send(results || []);
    });
  },

  create(response, request) {
    db.expenses.insert(request.body, function(err, results) {
      if (err) {
        return response.status(500).send(err);
      }

      response.send(results);
    });
  },

  update(response, request) {
    db.expenses.update({ _id: request.id }, request.body, {}, function(err) {
      if (err) {
        return response.status(500).send(err);
      }

      response.send({});
    });
  },

  destroy(response, request) {
    db.expenses.remove({ _id: request.id }, {}, function(err) {
      if (err) {
        return response.status(500).send(err);
      }

      response.send({});
    });
  }
};
