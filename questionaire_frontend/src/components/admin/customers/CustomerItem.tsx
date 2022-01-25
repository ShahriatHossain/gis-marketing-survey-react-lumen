import React, { useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import useHttpWithParam from "../../../hooks/use-httpWithParam";
import { deleteCustomer } from "../../../lib/customer-api";
import { hideBootstrapModal } from "../../../utils/helpers/utility-functions";
import { ModalParam } from "../../../utils/models/ModalParam";
import { Customer } from "../../../utils/models/Customer";
import ModalButtonLink from "../../UI/ModalButtonLink";
import ModalUI from "../../UI/ModalUI";

const CustomerItem: React.FC<{ customer: Customer, onDeleteCustomer: Function }> = ({ customer, onDeleteCustomer }) => {
    const { sendRequest: sendRequestForDelete, status: statusForDelete } = useHttpWithParam(deleteCustomer);

    const history = useHistory();

    const modalParam: ModalParam = {
        title: "Do you want to delete this record?",
        modalId: `customerDelete__${customer.id}`,
        actionButtonText: "Delete",
        bodyText: ""
    };

    useEffect(() => {
        if (statusForDelete === 'completed') {
            hideBootstrapModal(`${modalParam.modalId}`);
            onDeleteCustomer(customer.id);
        }
    }, [statusForDelete, history]);

    const deleteItemHandler = (customerId: string) => {
        sendRequestForDelete(customerId);
    }

    return (
        <React.Fragment>
            <tr key={customer.id}>
                <td>{customer.name}</td>
                <td>{customer.contact_name}</td>
                <td>{customer.email}</td>
                <td>{customer.phone}</td>
                <td>{customer.job_title}</td>
                <td>{customer.city}</td>
                <td>{customer.street}</td>
                <td>{customer.postalcode}</td>
                <td>{customer.state}</td>
                <td>{customer.county}</td>
                <td>{customer.country}</td>
                <td>{customer.latitude}</td>
                <td>{customer.longitude}</td>
                <td>{customer.fax}</td>
                <td>{customer.business_type}</td>
                <td>{customer.created_at}</td>
                <td>{customer.updated_at}</td>
                <td>
                    <div className="width-70px">
                        <NavLink className="btn btn-primary btn-sm" to={'/admin/edit-customer/' + customer.id}>
                            <i className="fas fa-pen"></i>
                        </NavLink>&nbsp;
                        <ModalButtonLink targetId={modalParam.modalId}><i className="far fa-trash-alt"></i></ModalButtonLink>
                    </div>
                    <ModalUI modalParam={modalParam} onActionItem={deleteItemHandler} />
                </td>
            </tr>
        </React.Fragment>
    );
}

export default CustomerItem;