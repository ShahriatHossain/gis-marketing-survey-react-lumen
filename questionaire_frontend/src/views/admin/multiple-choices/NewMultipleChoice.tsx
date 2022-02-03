import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import NewMultipleChoiceForm from "../../../components/admin/multiple-choices/NewMultipleChoiceForm";
import useHttpWithParam from "../../../hooks/use-httpWithParam";
import { addMultipleChoice } from "../../../lib/multiple-choice-api";
import { getAllQuestions } from "../../../lib/question-api";

const NewMultipleChoice: React.FC = () => {
    const { sendRequest, status } = useHttpWithParam(addMultipleChoice);
    const { sendRequest: sendRequestForQuestions, status: statusForQuestions, data: loadedQuestions } = useHttpWithParam(
        getAllQuestions,
        true
    );
    const history = useHistory();

    useEffect(() => {
        if (status === 'completed') {
            history.push('/admin/multichoices');
        }

        sendRequestForQuestions();
    }, [status, history, sendRequestForQuestions]);

    const addMultipleChoiceHandler = (multichoiceData: any) => {
        sendRequest(multichoiceData);
    };

    return <NewMultipleChoiceForm isLoading={status === 'pending'} questions={loadedQuestions} onAddMultipleChoice={addMultipleChoiceHandler} />;
};

export default NewMultipleChoice;