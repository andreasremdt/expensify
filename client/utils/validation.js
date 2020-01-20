function validate(fields) {
  var errors = {};

  for (let field of fields) {
    var error = getError(field);

    if (error) {
      errors[field.id] = error;
    }
  }

  return errors;
}

function getError(field) {
  var { validity } = field;

  if (field.type == "submit" || field.type == "button" || validity.valid) {
    return;
  }

  if (validity.badInput && field.type == "number") {
    return "Please enter a valid number.";
  }

  if (validity.valueMissing) {
    return "This field is required.";
  }

  if (validity.tooShort) {
    return "The input is too short.";
  }
}

export { validate, getError };
