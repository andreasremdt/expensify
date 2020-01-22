class ExpenseService {
  constructor() {
    this.headers = {
      "Content-Type": "application/json"
    };
  }

  send(url, method = "GET", body = null) {
    return new Promise((resolve, reject) => {
      if (body) {
        body = JSON.stringify(body);
      }

      fetch(url, { method, headers: this.headers, body })
        .then(response => response.json())
        .then(resolve)
        .catch(reject);
    });
  }

  getAll() {
    return this.send("/api/expenses");
  }

  create(expense) {
    return this.send("/api/expenses", "POST", expense);
  }

  update(expense) {
    return this.send(`/api/expenses/${expense._id}`, "PATCH", expense);
  }

  remove(id) {
    return this.send(`/api/expenses/${id}`, "DELETE");
  }
}

export default new ExpenseService();
