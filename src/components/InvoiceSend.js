import React from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom'
import validator from 'validator';

import InvoiceList from "../components/InvoiceList";

class InvoicePrepend extends React.Component {
  state = {
    email: "",
    errors: {}
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value, errors: {} });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { email, errors } = this.state;
    if (!validator.isEmail(email)) {
      errors.email = "A valid Email is required";
      return this.setState({ errors });
    }

    const dataToSubmit = {
      email,
      invoices: this.props.invoice.invoices
    };
    alert(dataToSubmit);
  };

  componentDidMount() {
    if (this.props.invoice.invoices.length === 0) {
      // return this.props.history.push("/");
    }
  }
  render() {
    const { email, errors } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="sendInvoce-heading">
              <h2>Invoice</h2>
            </div>
          </div>
          <div className="col-md-6">
            <div className="sendInvoce-date">
              <p>Reciept #01234 . June 27,  2019 </p>
            </div>
          </div>
        </div>
        <div className="arrow">
          <div className="row">
            <div className="col-md-2">
              <p className="parag">Prepared For</p>
            </div>
            <div className="col-md-8">
              <div className="underline-arrow"><i class="fas fa-caret-left left"></i><i class="fas fa-caret-right right"></i></div>
            </div>
            <div className="col-md-2">
              <p className="text-right parag">Payement To</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="p-for">
              <h2>Nancy Nguyen</h2>
              <p>336 Bon Air Center #384 Greenbae, CA 94904</p>
              <p>nancy@dailyui.com</p>
              <p>+01 (O) 1-2345-6789</p>
              <p>Tax ID: 123-456-789</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="p-to">
              <h2>Apple Inc</h2>
              <p>Greenbae, CA 94904</p>
              <p>nancy@dailyui.com</p>
              <p>+01 (O) 1-2345-6789</p>
              <p>Tax ID: 123-456-789</p>
            </div>
          </div>
        </div>
        <InvoiceList />

        {(
          <div className="mt-5">
            <form onSubmit={this.handleSubmit}>
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">
                    <strong>Bill To</strong>
                  </span>
                </div>
                <input
                  type="text"
                  name="email"
                  onChange={this.handleChange}
                  value={email}
                  className="form-control "
                  style={errors.email && {
                    border: '1px solid red',
                  }}
                />
              </div>
              <p className="mb-2">
                {errors.email && (
                  <small className="text-danger">{errors.email}</small>
                )}
              </p>
            </form>
            <div className="row mt-3 mb-5">
              <div className="col">
                <Link to="/" className="my-btn " onClick={this.handleSubmit}>
                  Send Invoice
              </Link>
              </div>

              <div>
                <Link to="/createinvoice" className="my-btn ml-4">
                  Add More Item
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  invoice: state.invoice
});

export default connect(mapStateToProps)(InvoicePrepend);
