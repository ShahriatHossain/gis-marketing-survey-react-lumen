import React from "react";
import { NavLink } from "react-router-dom";
import { Customer } from "../../../utils/models/Customer";
import CustomerItem from "./CustomerItem";

import './Customers.css';

const CustomerList: React.FC<{ customers: Customer[], onRefreshRecord: Function }> = ({ customers, onRefreshRecord }) => {

    const deleteCustomerHandler = (customerId: number) => {
        onRefreshRecord();
    }

    return (
        <React.Fragment>
            <div className="row">
                <div className="col">
                    <NavLink className="btn btn-primary btn-sm float-end mb-2" role="button" to={"/new-customer"}><i className="fas fa-plus"></i></NavLink>
                </div>
            </div>
            <div className="table-responsive">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th className={"valign-top"} scope="col">Name</th>
                            <th className="valign-top" scope="col">Contact Name</th>
                            <th className="valign-top" scope="col">Email</th>
                            <th className="valign-top" scope="col">Phone</th>
                            <th className="valign-top" scope="col">Job Title</th>
                            <th className="valign-top" scope="col">City</th>
                            <th className="valign-top" scope="col">Street</th>
                            <th className="valign-top" scope="col">Postal Code</th>
                            <th className="valign-top" scope="col">State</th>
                            <th className="valign-top" scope="col">County</th>
                            <th className="valign-top" scope="col">Country</th>
                            <th className="valign-top" scope="col">Latitude</th>
                            <th className="valign-top" scope="col">Longitude</th>
                            <th className="valign-top" scope="col">Fax</th>
                            <th className="valign-top" scope="col">Business Type</th>
                            <th className="valign-top" scope="col">Created At</th>
                            <th className="valign-top" scope="col">Updated At</th>
                            <th className="valign-top" scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {customers.map(customer => {
                            return (
                                <CustomerItem onDeleteCustomer={deleteCustomerHandler} key={customer.id} customer={customer} />
                            )
                        })}
                    </tbody>

                </table>
            </div>
        </React.Fragment>
    )
}

export default CustomerList;