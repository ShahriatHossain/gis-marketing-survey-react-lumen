import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import EditBusinessTypeForm from "../../../components/admin/business-types/EditBusinessTypeForm";
import useHttpWithParam from "../../../hooks/use-httpWithParam";
import { editBusinessType, getSingleBusinessType } from "../../../lib/business-type-api";

const EditBusinessType: React.FC = () => {
    const { sendRequest: sendRequestForEdit, status: statusForEdit } = useHttpWithParam(editBusinessType);
    const history = useHistory();

    const params = useParams();

    const { businessTypeId }: any = params;

    const { sendRequest: sendRequestForDetails, status: statusForDetails, data: loadedBusinessType, error } = useHttpWithParam(
        getSingleBusinessType,
        true
    );

    useEffect(() => {
        sendRequestForDetails(businessTypeId);
    }, [sendRequestForDetails, businessTypeId]);

    useEffect(() => {
        if (statusForEdit === 'completed') {
            history.push('/business-types');
        }
    }, [statusForEdit, history]);

    const editBusinessTypeHandler = (businessTypeData: any) => {
        sendRequestForEdit(businessTypeData);
    };

    return loadedBusinessType && <EditBusinessTypeForm existingData={loadedBusinessType} isLoading={statusForEdit === 'pending'} onEditBusinessType={editBusinessTypeHandler} />;
};

export default EditBusinessType;