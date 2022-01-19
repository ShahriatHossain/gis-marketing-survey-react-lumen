import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import EditQuestionForm from "../../../components/admin/questions/EditQuestionForm";
import useHttpWithParam from "../../../hooks/use-httpWithParam";
import { editQuestion, getSingleQuestion } from "../../../lib/question-api";
import { getAllQuestionTypes } from "../../../lib/question-type-api";
import { getAllSurveys } from "../../../lib/survey-api";

const EditQuestion: React.FC = () => {
    const { sendRequest: sendRequestForEdit, status: statusForEdit } = useHttpWithParam(editQuestion);
    const history = useHistory();

    const params = useParams();

    const { surveyId, questionId }: any = params;

    const { sendRequest: sendRequestForSurveys, status: statusForSurveys, data: loadedSurveys } = useHttpWithParam(
        getAllSurveys,
        true
    );
    const { sendRequest: sendRequestForQuestionTypes, status: statusForQuestionTypes, data: loadedQuestionTypes } = useHttpWithParam(
        getAllQuestionTypes,
        true
    );

    const { sendRequest: sendRequestForDetails, status: statusForDetails, data: loadedQuestion, error } = useHttpWithParam(
        getSingleQuestion,
        true
    );

    useEffect(() => {
        sendRequestForDetails({ surveyId: surveyId, questionId: questionId });
        sendRequestForSurveys();
        sendRequestForQuestionTypes();
    }, [sendRequestForDetails, surveyId, questionId, sendRequestForSurveys, sendRequestForQuestionTypes]);

    useEffect(() => {
        if (statusForEdit === 'completed') {
            history.push('/questions');
        }
    }, [statusForEdit, history]);

    const editQuestionHandler = (questionData: any) => {
        sendRequestForEdit(questionData);
    };

    return loadedQuestion && <EditQuestionForm existingData={loadedQuestion} isLoading={statusForEdit === 'pending'} surveys={loadedSurveys} questionTypes={loadedQuestionTypes} onEditQuestion={editQuestionHandler} />;
};

export default EditQuestion;