import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import NewQuestionTypeForm from "../../../components/admin/question-types/NewQuestionTypeForm";
import useHttpWithParam from "../../../hooks/use-httpWithParam";
import { addQuestionType } from "../../../lib/question-type-api";

const NewQuestionType: React.FC = () => {
    const { sendRequest, status } = useHttpWithParam(addQuestionType);
    const history = useHistory();

    useEffect(() => {
        if (status === 'completed') {
            history.push('/admin/question-types');
        }
    }, [status, history]);

    const addQuestionTypeHandler = (questionTypeData: any) => {
        sendRequest(questionTypeData);
    };

    return <NewQuestionTypeForm isLoading={status === 'pending'} onAddQuestionType={addQuestionTypeHandler} />;
};

export default NewQuestionType;