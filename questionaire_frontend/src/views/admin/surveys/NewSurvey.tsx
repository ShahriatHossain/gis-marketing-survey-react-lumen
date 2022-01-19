import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import NewSurveyForm from "../../../components/admin/surveys/NewSurveyForm";
import useHttpWithParam from "../../../hooks/use-httpWithParam";
import { addSurvey } from "../../../lib/survey-api";

const NewSurvey: React.FC = () => {
    const { sendRequest, status } = useHttpWithParam(addSurvey);
    const history = useHistory();

    useEffect(() => {
        if (status === 'completed') {
            history.push('/surveys');
        }
    }, [status, history]);

    const addSurveyHandler = (surveyData: any) => {
        sendRequest(surveyData);
    };

    return <NewSurveyForm isLoading={status === 'pending'} onAddSurvey={addSurveyHandler} />;
};

export default NewSurvey;