import React, { useEffect } from "react";
import NoCustomersFound from "../../../components/admin/customers/NoCustomersFound";
import CustomerList from "../../../components/admin/customers/CustomerList";
import LoadingSpinner from "../../../components/UI/LoadingSpinner";
import useHttpWithParam from "../../../hooks/use-httpWithParam";
import { getAllCustomers } from "../../../lib/customer-api";

const AllCustomers: React.FC = () => {
    const { sendRequest, status, data: loadedCustomers, error } = useHttpWithParam(
        getAllCustomers,
        true
    );

    useEffect(() => {
        sendRequest();
    }, [sendRequest]);

    const refreshRecordHandler = () => {
        sendRequest();
    }

    if (status === 'pending') {
        return (
            <React.Fragment>
                <LoadingSpinner />
            </React.Fragment>
        );
    }

    if (error) {
        return <p className='centered focused'>{error}</p>;
    }

    if (status === 'completed' && (!loadedCustomers || loadedCustomers.length === 0)) {
        return <NoCustomersFound />;
    }


    return <CustomerList customers={loadedCustomers} onRefreshRecord={refreshRecordHandler} />;
}

export default AllCustomers;