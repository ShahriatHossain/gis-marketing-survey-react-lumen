import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import EditCustomerForm from "../../../components/admin/customers/EditCustomerForm";
import useHttpWithParam from "../../../hooks/use-httpWithParam";
import { editCustomer, getSingleCustomer } from "../../../lib/customer-api";

const EditCustomer: React.FC = () => {
    const { sendRequest: sendRequestForEdit, status: statusForEdit } = useHttpWithParam(editCustomer);
    const history = useHistory();

    const params = useParams();

    const { customerId }: any = params;

    const { sendRequest: sendRequestForDetails, status: statusForDetails, data: loadedCustomer, error } = useHttpWithParam(
        getSingleCustomer,
        true
    );

    useEffect(() => {
        sendRequestForDetails(customerId);
    }, [sendRequestForDetails, customerId]);

    useEffect(() => {
        if (statusForEdit === 'completed') {
            history.push('/admin/customers');
        }
    }, [statusForEdit, history]);

    const editCustomerHandler = (customerData: any) => {
        sendRequestForEdit(customerData);
    };

    return loadedCustomer && <EditCustomerForm existingData={loadedCustomer} isLoading={statusForEdit === 'pending'} onEditCustomer={editCustomerHandler} />;
};

export default EditCustomer;