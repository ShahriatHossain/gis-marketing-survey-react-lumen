import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import EditMultipleChoiceForm from "../../../components/admin/multiple-choices/EditMultipleChoiceForm";
import useHttpWithParam from "../../../hooks/use-httpWithParam";
import { editMultipleChoice, getSingleMultipleChoice } from "../../../lib/multiple-choice-api";
import { getAllQuestions } from "../../../lib/question-api";

const EditMultipleChoice: React.FC = () => {
    const { sendRequest: sendRequestForEdit, status: statusForEdit } = useHttpWithParam(editMultipleChoice);
    const { sendRequest: sendRequestForQuestions, status: statusForQuestions, data: loadedQuestions } = useHttpWithParam(
        getAllQuestions,
        true
    );
    const history = useHistory();

    const params = useParams();

    const { multiChoiceId }: any = params;

    const { sendRequest: sendRequestForDetails, status: statusForDetails, data: loadedMultipleChoice, error } = useHttpWithParam(
        getSingleMultipleChoice,
        true
    );

    useEffect(() => {
        sendRequestForDetails(multiChoiceId);
        sendRequestForQuestions();
    }, [sendRequestForDetails, multiChoiceId, sendRequestForQuestions]);

    useEffect(() => {
        if (statusForEdit === 'completed') {
            history.push('/admin/multichoices');
        }
    }, [statusForEdit, history]);

    const editMultipleChoiceHandler = (multichoiceData: any) => {
        sendRequestForEdit(multichoiceData);
    };

    return loadedMultipleChoice && <EditMultipleChoiceForm existingData={loadedMultipleChoice} isLoading={statusForEdit === 'pending'} questions={loadedQuestions} onEditMultipleChoice={editMultipleChoiceHandler} />;
};

export default EditMultipleChoice;