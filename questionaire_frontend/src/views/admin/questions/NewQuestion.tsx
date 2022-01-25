import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import NewQuestionForm from "../../../components/admin/questions/NewQuestionForm";
import useHttpWithParam from "../../../hooks/use-httpWithParam";
import { addQuestion } from "../../../lib/question-api";
import { getAllQuestionTypes } from "../../../lib/question-type-api";
import { getAllSurveys } from "../../../lib/survey-api";

const NewQuestion: React.FC = () => {
    const { sendRequest, status } = useHttpWithParam(addQuestion);
    const { sendRequest: sendRequestForSurveys, status: statusForSurveys, data: loadedSurveys } = useHttpWithParam(
        getAllSurveys,
        true
    );
    const { sendRequest: sendRequestForQuestionTypes, status: statusForQuestionTypes, data: loadedQuestionTypes } = useHttpWithParam(
        getAllQuestionTypes,
        true
    );

    const history = useHistory();

    useEffect(() => {
        if (status === 'completed') {
            history.push('/admin/questions');
        }

        sendRequestForSurveys();
        sendRequestForQuestionTypes();

    }, [status, history, sendRequestForSurveys, sendRequestForQuestionTypes]);

    const addQuestionHandler = (questionData: any) => {
        sendRequest(questionData);
    };

    return <NewQuestionForm isLoading={status === 'pending'} surveys={loadedSurveys} questionTypes={loadedQuestionTypes} onAddQuestion={addQuestionHandler} />;
};

export default NewQuestion;