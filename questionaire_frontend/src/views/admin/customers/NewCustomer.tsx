import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import NewCustomerForm from "../../../components/admin/customers/NewCustomerForm";
import useHttpWithParam from "../../../hooks/use-httpWithParam";
import { addCustomer } from "../../../lib/customer-api";
import { getAllBusinessTypes } from "../../../lib/business-type-api";

const NewCustomer: React.FC = () => {
    const { sendRequest, status } = useHttpWithParam(addCustomer);
    const { sendRequest: sendRequestForBusinessTypes, data: loadedBusinessTypes } = useHttpWithParam(
        getAllBusinessTypes,
        true
    );
    const history = useHistory();

    useEffect(() => {
        if (status === 'completed') {
            history.push('/admin/customers');
        }

        sendRequestForBusinessTypes();
    }, [status, history, sendRequestForBusinessTypes]);

    const addCustomerHandler = (customerData: any) => {
        sendRequest(customerData);
    };

    return <NewCustomerForm isLoading={status === 'pending'} businessTypes={loadedBusinessTypes} onAddCustomer={addCustomerHandler} />;
};

export default NewCustomer;