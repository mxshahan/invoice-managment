import React from "react";
import { isEmpty } from "validator";
import uuid from "uuid/v4";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import { createInvoice } from "../actions/invoiceActions";

class CreateInvoice extends React.Component {
  state = {
    toggleFrom: false,
    name: "",
    quantity: "",
    currency: "USD",
    price: "",
    errors: {},
    eachItem: []
  };
  save = (e) => {
    e.preventDefault();
    this.props.createInvoice(this.state.eachItem, this.props.history);
  }
  handleDelete = index => {
    const eachItem = this.state.eachItem;
    eachItem.splice(index, 1);
    this.setState(() => ({ eachItem }))
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value, errors: {} });
  }

  componentDidMount() {
    this.setState({
      name: "",
      quantity: "",
      price: "",
      currency: "USD",
      errors: {},
      eachItem: []
    }
    );
  }

  handleSubmit = e => {
    e.preventDefault();
    const { name, quantity, price, currency, errors } = this.state;
    if (isEmpty(name)) {
      errors.name = "Name can't be empty";
      return this.setState({ errors });
    }
    if (isEmpty(quantity)) {
      errors.quantity = "Quantity can't be empty";
      return this.setState({ errors });
    }
    if (isEmpty(price)) {
      errors.price = "Price can't be empty";
      return this.setState({ errors });
    }
    const newInvoiceDate = {
      id: uuid(),
      name,
      quantity,
      price,
      currency
    };
    this.setState((prevState) => ({ eachItem: [newInvoiceDate, ...prevState.eachItem] }));
    this.setState({
      name: '',
      quantity: '',
      price: '',
      currency: ''
    });
    // this.props.createInvoice(newInvoiceDate, this.props.history);
    // console.log(this.state.eachItem);
  };
  render() {
    let cnt = 1;
    const { errors } = this.state;
    return (
      <div>
        <div className="invoice-hedg">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="heading-alluser">
                  <h2 className="invoice"><span className="underline invoice-underline add-new">Add New Item</span></h2>
                </div>
              </div>
              <div className="col d-flex align-items-center justify-content-end">
                <button
                  onClick={this.save}
                  className="my-btn no-mg f-right"
                  disabled={this.state.eachItem.length !== 0 ? false : true}
                >View </button>
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-2">
          <form >
            <div className="row">
              <div className="col-md-3 ma">
                <label>Name: </label>
                <input
                  type="name"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                  className="form-control"
                />
                {errors.name && (
                  <small className="text-danger">{errors.name}</small>
                )}
              </div>
              <div className="col-md-3 ma">
                <label>Quantity: </label>
                <input
                  type="number"
                  name="quantity"
                  value={this.state.quantity}
                  onChange={this.handleChange}
                  className="form-control"
                />
                {errors.quantity && (
                  <small className="text-danger">{errors.quantity}</small>
                )}
              </div>
              <div className="col-md-3 own">
                <label>Currency:
                <select
                    className="form-control"
                    onChange={this.handleChange}
                    name="currency"
                    value={this.state.currency}
                  >
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="GBP">GBP</option>
                    <option value="INR">INR</option>
                  </select>
                </label>
              </div>
              <div className="col-md-3">
                <label>Price: </label>
                <input
                  type="number"
                  name="price"
                  value={this.state.price}
                  onChange={this.handleChange}
                  className="form-control"
                />
                <br />
                {errors.price && (
                  <small className="text-danger">{errors.price}</small>
                )}
              </div>
            </div>
            <div className="col-md-12 text-right">
              <button onClick={this.handleSubmit} className="my-btn">Save</button>
              <Link to="/" className="my-btn ml-4">
                Cancel
              </Link>
            </div>
          </form>
        </div>
        {this.state.eachItem.length !== 0 ?
          (<div className="container">
            <div className="row">
              <div className="col-md-12">
                <table className="allUser-table add-nw-table">
                  <tr className="no-bg">
                    <th>No</th>
                    <th>Client Name</th>
                    <th>Quantity</th>
                    <th>Currency</th>
                    <th>Price</th>
                  </tr>
                  {this.state.eachItem.map((item, index) => (
                    <tr className="">
                      <td><p>{cnt++}</p></td>
                      <td><p className="name">{item.name}</p></td>
                      <td><p className="date">{item.quantity}</p></td>
                      <td><p className="amount">{item.currency}</p></td>
                      <td className="item-row">
                        <p className="recieved">{item.price}</p>
                        <button onClick={() => { this.handleDelete(index) }} className="delete-item"><i class="far fa-times-circle"></i></button>
                      </td>
                    </tr>
                  ))}
                </table>
              </div>
            </div>
          </div>) : null}
      </div>
    );
  }
}

export default connect(
  null,
  { createInvoice }
)(withRouter(CreateInvoice));
