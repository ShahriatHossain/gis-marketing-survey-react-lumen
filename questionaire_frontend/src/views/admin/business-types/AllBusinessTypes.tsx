import React, { useEffect } from "react";
import BusinessTypeList from "../../../components/admin/business-types/BusinessTypeList";
import NoBusinessTypesFound from "../../../components/admin/business-types/NoBusinessTypesFound";
import LoadingSpinner from "../../../components/UI/LoadingSpinner";
import useHttpWithParam from "../../../hooks/use-httpWithParam";
import { getAllBusinessTypes } from "../../../lib/business-type-api";

const AllBusinessTypes: React.FC = () => {
    const { sendRequest, status, data: loadedBusinessTypes, error } = useHttpWithParam(
        getAllBusinessTypes,
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

    if (status === 'completed' && (!loadedBusinessTypes || loadedBusinessTypes.length === 0)) {
        return <NoBusinessTypesFound />;
    }


    return <BusinessTypeList businessTypes={loadedBusinessTypes} onRefreshRecord={refreshRecordHandler} />;
}

export default AllBusinessTypes;