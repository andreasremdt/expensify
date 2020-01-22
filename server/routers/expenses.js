var router = require("express").Router();
var expenses = require("../controllers/expenses");

router
  .get("/expenses", expenses.index)
  .get("/expenses/:id", expenses.show)
  .post("/expenses", expenses.create)
  .patch("/expenses/:id", expenses.update)
  .delete("/expenses/:id", expenses.destroy);

module.exports = router;
