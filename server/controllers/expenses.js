var db = require("../database");

module.exports = {
  index(req, res) {
    db.expenses.find({}, function(err, results) {
      if (err) {
        return res.status(500).send(err);
      }

      res.send(results);
    });
  },

  show(req, res) {
    db.expenses.findOne({ _id: req.id }, function(err, results) {
      if (err) {
        return res.status(500).send(err);
      }

      res.send(results || []);
    });
  },

  create(req, res) {
    db.expenses.insert(req.body, function(err, results) {
      if (err) {
        return res.status(500).send(err);
      }

      res.send(results);
    });
  },

  update(req, res) {
    db.expenses.update({ _id: req.params.id }, req.body, {}, function(err) {
      if (err) {
        return res.status(500).send(err);
      }

      res.send({});
    });
  },

  destroy(req, res) {
    db.expenses.remove({ _id: req.params.id }, {}, function(err) {
      if (err) {
        return res.status(500).send(err);
      }

      res.send({});
    });
  }
};
