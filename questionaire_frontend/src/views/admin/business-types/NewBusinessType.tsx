import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import NewBusinessTypeForm from "../../../components/admin/business-types/NewBusinessTypeForm";
import useHttpWithParam from "../../../hooks/use-httpWithParam";
import { addBusinessType } from "../../../lib/business-type-api";

const NewBusinessType: React.FC = () => {
    const { sendRequest, status } = useHttpWithParam(addBusinessType);
    const history = useHistory();

    useEffect(() => {
        if (status === 'completed') {
            history.push('/admin/business-types');
        }
    }, [status, history]);

    const addBusinessTypeHandler = (businessTypeData: any) => {
        sendRequest(businessTypeData);
    };

    return <NewBusinessTypeForm isLoading={status === 'pending'} onAddBusinessType={addBusinessTypeHandler} />;
};

export default NewBusinessType;