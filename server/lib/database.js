var Datastore = require("nedb");
var path = require("path");

module.exports = {
  expenses: new Datastore({
    filename: path.join(__dirname, "..", "storage", "expenses.db"),
    autoload: true
  }),
  
  users: new Datastore({
    filename: path.join(__dirname, "..", "storage", "users.db"),
    autoload: true
  })
};