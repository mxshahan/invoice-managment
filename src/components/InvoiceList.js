import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { removeInvoice } from "../actions/invoiceActions";

class InvoiceList extends React.Component {
  state = { invoice: {} };
  componentWillReceiveProps(nextProps) {
    if (nextProps.invoice) {
      this.setState({ invoice: nextProps.invoice });
    }
  }
  componentDidMount() {
    if (this.props.invoice.invoices.length === 0) {
      // return this.props.history.push("/");
      console.log(this.props);
    }
  }

  removeInvoice = id => this.props.removeInvoice(id);

  renderInvoiceList = () => {
    let cnt=1,total=0;
    const { invoice } = this.props;
    if (invoice.invoices.length > 0)
      return (
        <div className="row">
            <div className="col-md-12">
                <table className="allUser-table invoice-list">
                  <tr className="no-bg">
                      <th>No</th>
                      <th>Description</th>
                      <th>Qty</th>
                      <th>Price</th>
                      <th>Subtotal</th>
                  </tr>
                  {invoice.invoices.map(item=>{
                    total+=(item.price * item.quantity)
                    return(
                      <tr>
                        <td><p>{cnt++}</p></td>
                        <td><p className="name">{item.name}</p></td>
                        <td><p className="date">{item.quantity}</p></td>
                        <td><p className="amount">${item.price}</p></td>
                        <td><p className="recieved">${item.price * item.quantity}</p></td>
                      </tr>
                  )})}
                  <tr className="no-mg">
                    <td></td>
                    <td></td>
                    <td></td>
                    <td><p className="subtotal">Subtotal:</p></td>
                    <td><p className="subtotal">${total}</p></td>
                  </tr>
                  <tr className="no-mg">
                    <td></td>
                    <td></td>
                    <td></td>
                    <td><p>Vat(3%)</p></td>
                    <td><p>${(total*3)/100}</p></td>
                  </tr>
                  <tr className="no-mg">
                    <td></td>
                    <td></td>
                    <td></td>
                    <td><p>Total: </p></td>
                    <td><p>${((total*3)/100)+total}</p></td>
                  </tr>
              </table>
          </div>
        </div>
      );
    else
      return (
          <div className="row">
            <div className="col-md-12">
                <table className="allUser-table invoice-list">
                  <tr className="no-bg">
                      <th>No</th>
                      <th>Description</th>
                      <th>Qty</th>
                      <th>Price</th>
                      <th>Subtotal</th>
                  </tr>
              </table>
              <h3 className="text-danger mt-4 text-center">Item Not Added Yet.</h3>
          </div>
        </div>
      );
  };
  render() {
    return <div className="mt-3">{this.renderInvoiceList()}</div>;
  }
}

const mapStateToProps = state => ({
  invoice: state.invoice
});

export default connect(
  mapStateToProps,
  { removeInvoice }
)(withRouter(InvoiceList));
