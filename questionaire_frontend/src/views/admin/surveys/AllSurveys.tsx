import React, { useEffect } from "react";
import NoSurveysFound from "../../../components/admin/surveys/NoSurveysFound";
import SurveyList from "../../../components/admin/surveys/SurveyList";
import LoadingSpinner from "../../../components/UI/LoadingSpinner";
import useHttpWithParam from "../../../hooks/use-httpWithParam";
import { getAllSurveys } from "../../../lib/survey-api";

const AllSurveys: React.FC = () => {
    const { sendRequest, status, data: loadedSurveys, error } = useHttpWithParam(
        getAllSurveys,
        true
    );

    useEffect(() => {
        sendRequest();
    }, [sendRequest]);

    const refreshRecordHandler = () => {
        sendRequest();
    }

    if (status === 'pending') {
        return (
            <React.Fragment>
                <LoadingSpinner />
            </React.Fragment>
        );
    }

    if (error) {
        return <p className='centered focused'>{error}</p>;
    }

    if (status === 'completed' && (!loadedSurveys || loadedSurveys.length === 0)) {
        return <NoSurveysFound />;
    }


    return <SurveyList surveys={loadedSurveys} onRefreshRecord={refreshRecordHandler} />;
}

export default AllSurveys;