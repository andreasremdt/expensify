import React from "react";
import formatCurrency from '../utils/format-currency';

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
      console.log(amount);
      this.setState({ amount });
    }
  };

  handleSubmit = (evt) => {
    evt.preventDefault();

    console.log(this.state);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="name">Name *</label>
          <input type="text" id="name" onChange={this.handleChange} value={this.state.name} placeholder="Groceries, electricity bill..." required />
        </div>
        <div>
          <label htmlFor="amount">Amount *</label>
          <input type="text" id="amount" onChange={this.handleChange} onBlur={this.handleBlur} value={this.state.amount} placeholder="30,99" required />
        </div>
        <div>
          <label htmlFor="category">Category *</label>
          <select id="category" onChange={this.handleChange} required>
            <option value="-">-</option>
            <option value="living">Living</option>
            <option value="vacation">Vacation</option>
          </select>
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea id="description" onChange={this.handleChange} value={this.state.description} placeholder="Some additional description" />
        </div>
        <button type="submit">Save</button>
      </form>
    )
  }
}

export default ExpensesForm;