import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import EditQuestionTypeForm from "../../../components/admin/question-types/EditQuestionTypeForm";
import useHttpWithParam from "../../../hooks/use-httpWithParam";
import { editQuestionType, getSingleQuestionType } from "../../../lib/question-type-api";

const EditQuestionType: React.FC = () => {
    const { sendRequest: sendRequestForEdit, status: statusForEdit } = useHttpWithParam(editQuestionType);
    const history = useHistory();

    const params = useParams();

    const { questionTypeId }: any = params;

    const { sendRequest: sendRequestForDetails, status: statusForDetails, data: loadedQuestionType, error } = useHttpWithParam(
        getSingleQuestionType,
        true
    );

    useEffect(() => {
        sendRequestForDetails(questionTypeId);
    }, [sendRequestForDetails, questionTypeId]);

    useEffect(() => {
        if (statusForEdit === 'completed') {
            history.push('/admin/question-types');
        }
    }, [statusForEdit, history]);

    const editQuestionTypeHandler = (questionTypeData: any) => {
        sendRequestForEdit(questionTypeData);
    };

    return loadedQuestionType && <EditQuestionTypeForm existingData={loadedQuestionType} isLoading={statusForEdit === 'pending'} onEditQuestionType={editQuestionTypeHandler} />;
};

export default EditQuestionType;