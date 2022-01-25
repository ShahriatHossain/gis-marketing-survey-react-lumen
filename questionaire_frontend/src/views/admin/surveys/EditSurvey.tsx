import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import EditSurveyForm from "../../../components/admin/surveys/EditSurveyForm";
import useHttpWithParam from "../../../hooks/use-httpWithParam";
import { editSurvey, getSingleSurvey } from "../../../lib/survey-api";

const EditSurvey: React.FC = () => {
    const { sendRequest: sendRequestForEdit, status: statusForEdit } = useHttpWithParam(editSurvey);
    const history = useHistory();

    const params = useParams();

    const { surveyId }: any = params;

    const { sendRequest: sendRequestForDetails, status: statusForDetails, data: loadedSurvey, error } = useHttpWithParam(
        getSingleSurvey,
        true
    );

    useEffect(() => {
        sendRequestForDetails(surveyId);
    }, [sendRequestForDetails, surveyId]);

    useEffect(() => {
        if (statusForEdit === 'completed') {
            history.push('/admin/surveys');
        }
    }, [statusForEdit, history]);

    const editSurveyHandler = (surveyData: any) => {
        sendRequestForEdit(surveyData);
    };

    return loadedSurvey && <EditSurveyForm existingData={loadedSurvey} isLoading={statusForEdit === 'pending'} onEditSurvey={editSurveyHandler} />;
};

export default EditSurvey;