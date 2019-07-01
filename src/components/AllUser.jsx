import React from 'react';
import { Link } from 'react-router-dom';

class AllUser extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="invoice-hedg">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="heading-alluser">
                                    <h2 className="invoice"><span className="underline invoice-underline">Invoices</span></h2>
                                    {/* <h3 className="company-name">Company name</h3> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="main-heading">
                                <p className="heading-top">Billed</p>
                                <h2 className="tble-heading"><span className="underline">$</span>214.30</h2>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="main-heading">
                                <p className="heading-top">Received</p>
                                <h2 className="tble-heading"><span className="underline">$</span>560.10</h2>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="main-heading">
                                <Link to="/createinvoice" className="btn btn-lg create-invoice">Create invoice <span className="btn-icon">+</span></Link>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <table className="allUser-table">
                                <thead>
                                    <tr className="no-bg">
                                        <th>No</th>
                                        <th>Client Name</th>
                                        <th>Issue Date</th>
                                        <th>Amount</th>
                                        <th>Recieved</th>
                                        <th>Due</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    <tr>
                                        <td><p>1</p></td>
                                        <td><p className="name">Company of Misbauddin</p></td>
                                        <td><p className="date">27 jul 2019</p></td>
                                        <td><p className="amount">$2324</p></td>
                                        <td><p className="recieved">$2324</p></td>
                                        <td><p className="due">$0</p></td>
                                        <td><p className="status">Paid</p></td>
                                        <td><p className="action-cover"><Link to="/sendinvoice" className="btn btn-sucess btn-action">View</Link></p></td>
                                    </tr>
                                    <tr>
                                        <td><p>2</p></td>
                                        <td><p className="name">Company of Misbauddin</p></td>
                                        <td><p className="date">27 jul 2019</p></td>
                                        <td><p className="amount">$2324</p></td>
                                        <td><p className="recieved">$2324</p></td>
                                        <td><p className="due">$0</p></td>
                                        <td><p className="status">Paid</p></td>
                                        <td><p className="action-cover"><Link to="/sendinvoice" className="btn btn-sucess btn-action">View</Link></p></td>
                                    </tr>
                                    <tr>
                                        <td><p>3</p></td>
                                        <td><p className="name">Company of Misbauddin</p></td>
                                        <td><p className="date">27 jul 2019</p></td>
                                        <td><p className="amount">$2324</p></td>
                                        <td><p className="recieved">$2324</p></td>
                                        <td><p className="due">$0</p></td>
                                        <td><p className="status">Paid</p></td>
                                        <td><p className="action-cover"><Link to="/sendinvoice" className="btn btn-sucess btn-action">View</Link></p></td>
                                    </tr>
                                    <tr>
                                        <td><p>4</p></td>
                                        <td><p className="name">Company of Misbauddin</p></td>
                                        <td><p className="date">27 jul 2019</p></td>
                                        <td><p className="amount">$2324</p></td>
                                        <td><p className="recieved">$2324</p></td>
                                        <td><p className="due">$0</p></td>
                                        <td><p className="status">Paid</p></td>
                                        <td><p className="action-cover"><Link to="/sendinvoice" className="btn btn-sucess btn-action">View</Link></p></td>
                                    </tr>
                                    <tr>
                                        <td><p>5</p></td>
                                        <td><p className="name">Company of Misbauddin</p></td>
                                        <td><p className="date">27 jul 2019</p></td>
                                        <td><p className="amount">$2324</p></td>
                                        <td><p className="recieved">$2324</p></td>
                                        <td><p className="due">$0</p></td>
                                        <td><p className="status">Paid</p></td>
                                        <td><p className="action-cover"><Link to="/sendinvoice" className="btn btn-sucess btn-action">View</Link></p></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default AllUser;