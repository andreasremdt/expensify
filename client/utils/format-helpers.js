function formatDate(timestamp) {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    day: "numeric",
    month: "long"
  }).format(timestamp);
}

function formatCurrency(number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "EUR"
  }).format(number);
};

export { formatDate, formatCurrency };