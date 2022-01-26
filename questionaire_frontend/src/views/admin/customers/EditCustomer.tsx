import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import EditCustomerForm from "../../../components/admin/customers/EditCustomerForm";
import useHttpWithParam from "../../../hooks/use-httpWithParam";
import { editCustomer, getSingleCustomer } from "../../../lib/customer-api";
import { getAllBusinessTypes } from "../../../lib/business-type-api";

const EditCustomer: React.FC = () => {
    const { sendRequest: sendRequestForEdit, status: statusForEdit } = useHttpWithParam(editCustomer);
    const { sendRequest: sendRequestForBusinessTypes, data: loadedBusinessTypes } = useHttpWithParam(
        getAllBusinessTypes,
        true
    );
    const history = useHistory();

    const params = useParams();

    const { customerId }: any = params;

    const { sendRequest: sendRequestForDetails, status: statusForDetails, data: loadedCustomer, error } = useHttpWithParam(
        getSingleCustomer,
        true
    );

    useEffect(() => {
        sendRequestForDetails(customerId);
        sendRequestForBusinessTypes();
    }, [sendRequestForDetails, sendRequestForBusinessTypes, customerId]);

    useEffect(() => {
        if (statusForEdit === 'completed') {
            history.push('/admin/customers');
        }
    }, [statusForEdit, history]);

    const editCustomerHandler = (customerData: any) => {
        sendRequestForEdit(customerData);
    };

    return loadedCustomer && <EditCustomerForm existingData={loadedCustomer} isLoading={statusForEdit === 'pending'} businessTypes={loadedBusinessTypes} onEditCustomer={editCustomerHandler} />;
};

export default EditCustomer;