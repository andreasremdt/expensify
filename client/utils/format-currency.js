function formatCurrency(value) {
  var segments = value.split(",");

  if (segments.length > 2) {
    return false;
  }

  if (segments.length == 1) {
    segments[1] = "00";
  }

  if (segments[1].length == 1) {
    segments[1] = segments[1] + "0";
  } else if (segments[1].length > 2) {
    segments[1] = segments[1].slice(0, 2);
  }

  var before = parseInt(segments[0]);
  var after = parseInt(segments[1]);

  if (isNaN(before) || isNaN(after)) {
    return false;
  }

  return `${segments[0]},${segments[1]}`;
}

export default formatCurrency;