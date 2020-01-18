import React from "react";
import Label from "./Label";
import Input from "./Input";
import Icon from "./Icon";
import Button from "./Button";
import formatCurrency from '../utils/format-currency';
import "./Form.css";

class ExpensesForm extends React.PureComponent {
  state = {
    name: "",
    amount: "",
    category: "",
    description: ""
  };

  handleChange = (evt) => {
    var { target } = evt;
    
    this.setState({
      [target.id]: target.value
    });
  };

  handleBlur = (evt) => {
    var amount = formatCurrency(evt.target.value);
    
    if (amount) {
      this.setState({ amount });
    }
  };

  handleSubmit = (evt) => {
    evt.preventDefault();

    this.props.handleCreate(this.state);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="expenses-form">
        <div className="group">
          <Label htmlFor="name">Name *</Label>
          <Input type="text" id="name" onChange={this.handleChange} value={this.state.name} placeholder="Groceries, electricity bill..." required />
        </div>

        <div className="group description">
          <Label htmlFor="description">Description</Label>
          <Input id="description" onChange={this.handleChange} value={this.state.description} placeholder="Some additional description" />
        </div>

        <div className="group amount">
          <Label htmlFor="amount">Amount *</Label>
          <Input type="text" id="amount" onChange={this.handleChange} onBlur={this.handleBlur} value={this.state.amount} placeholder="30,99" required />
        </div>

        <div className="group">
          <Label htmlFor="category">Category *</Label>
          <Input component="select" id="category" onChange={this.handleChange} required>
            <option value="-">-</option>
            <option value="living">Living</option>
            <option value="vacation">Vacation</option>
          </Input>
        </div>

        <div className="group">
          <Button onClick={this.props.handleToggleForm} variant="secondary">
            <Icon type="cancel" /> Cancel
          </Button>
        </div>

        <Button type="submit">
          <Icon type="check" /> Save
        </Button>
      </form>
    )
  }
}

export default ExpensesForm;