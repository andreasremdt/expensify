var server = require("./lib/server");
var expenses = require("./controllers/expenses");

server()
  .get("/api/expenses", expenses.index)
  .get("/api/expenses/:id", expenses.show)
  .post("/api/expenses", expenses.create)
  .patch("/api/expenses/:id", expenses.update)
  .delete("/api/expenses/:id", expenses.destroy)
  .start();
