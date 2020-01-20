import React from "react";
import Label from "./Label";
import Input from "./Input";
import Icon from "./Icon";
import Button from "./Button";
import { validate, getError } from "../utils/validation";
import "./Form.css";

const DEFAULT_STATE = {
  name: "",
  amount: "",
  category: "",
  description: "",
  errors: {}
};

class ExpensesForm extends React.PureComponent {
  state = DEFAULT_STATE;

  handleChange = evt => {
    var { target } = evt;

    this.setState({
      [target.id]: target.value
    });
  };

  handleBlur = evt => {
    var { target } = evt;
    var error = getError(target);

    this.setState({
      errors: Object.assign({}, this.state.errors, { [target.id]: error })
    });
  };

  handleSubmit = evt => {
    evt.preventDefault();

    var errors = validate(evt.currentTarget.elements);

    if (Object.keys(errors).length) {
      this.setState({ errors });
    } else {
      this.props.handleCreate(this.state);

      this.setState(DEFAULT_STATE);
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="expenses-form" noValidate>
        <div className="group">
          <Label htmlFor="name">Name *</Label>
          <Input
            type="text"
            id="name"
            onChange={this.handleChange}
            onBlur={this.handleBlur}
            value={this.state.name}
            autoFocus
            placeholder="Groceries, electricity bill..."
            error={this.state.errors.name}
            required
          />
        </div>

        <div className="group description">
          <Label htmlFor="description">Description</Label>
          <Input
            id="description"
            onChange={this.handleChange}
            value={this.state.description}
            placeholder="Some additional description"
          />
        </div>

        <div className="group amount">
          <Label htmlFor="amount">Amount *</Label>
          <Input
            type="number"
            id="amount"
            onChange={this.handleChange}
            onBlur={this.handleBlur}
            value={this.state.amount}
            placeholder="30,99"
            error={this.state.errors.amount}
            required
          />
        </div>

        <div className="group">
          <Label htmlFor="category">Category *</Label>
          <Input
            component="select"
            id="category"
            value={this.state.category}
            error={this.state.errors.category}
            onChange={this.handleChange}
            required
          >
            <option value="-">-</option>
            <option value="living">Living</option>
            <option value="vacation">Vacation</option>
          </Input>
        </div>

        <Button type="submit">
          <Icon type="check" /> Save
        </Button>
      </form>
    );
  }
}

export default ExpensesForm;
