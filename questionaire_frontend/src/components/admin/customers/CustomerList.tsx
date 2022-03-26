import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { usePaginatedData } from "../../../hooks/use-paginatedData";
import { PageSize } from "../../../utils/constants/common";
import { Customer } from "../../../utils/models/Customer";
import Pagination from "../../UI/Pagination";
import CustomerItem from "./CustomerItem";

import './Customers.css';

const CustomerList: React.FC<{ customers: Customer[], onRefreshRecord: Function }> = ({ customers, onRefreshRecord }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const paginatedData = usePaginatedData(currentPage, customers);

    const deleteCustomerHandler = (customerId: number) => {
        onRefreshRecord();
    }

    return (
        <React.Fragment>
            <div className="row">
                <div className="col">
                    <NavLink className="btn btn-primary btn-sm float-end mb-2" role="button" to={"/admin/new-customer"}><i className="fas fa-plus"></i></NavLink>
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
                        {paginatedData.map(customer => {
                            return (
                                <CustomerItem onDeleteCustomer={deleteCustomerHandler} key={customer.id} customer={customer} />
                            )
                        })}
                    </tbody>

                </table>
            </div>
            <br />
            <Pagination
                    currentPage={currentPage}
                    totalCount={customers.length}
                    pageSize={PageSize}
                    onPageChange={(page: number) => setCurrentPage(page)} />
        </React.Fragment>
    )
}

export default CustomerList;