import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import NewCustomerForm from "../../../components/admin/customers/NewCustomerForm";
import useHttpWithParam from "../../../hooks/use-httpWithParam";
import { addCustomer } from "../../../lib/customer-api";

const NewCustomer: React.FC = () => {
    const { sendRequest, status } = useHttpWithParam(addCustomer);
    const history = useHistory();

    useEffect(() => {
        if (status === 'completed') {
            history.push('/admin/customers');
        }
    }, [status, history]);

    const addCustomerHandler = (customerData: any) => {
        sendRequest(customerData);
    };

    return <NewCustomerForm isLoading={status === 'pending'} onAddCustomer={addCustomerHandler} />;
};

export default NewCustomer;