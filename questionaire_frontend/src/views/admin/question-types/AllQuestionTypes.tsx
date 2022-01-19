import React, { useEffect } from "react";
import NoQuestionTypesFound from "../../../components/admin/question-types/NoQuestionTypesFound";
import QuestionTypeList from "../../../components/admin/question-types/QuestionTypeList";
import LoadingSpinner from "../../../components/UI/LoadingSpinner";
import useHttpWithParam from "../../../hooks/use-httpWithParam";
import { getAllQuestionTypes } from "../../../lib/question-type-api";

const AllQuestionTypes: React.FC = () => {
    const { sendRequest, status, data: loadedQuestionTypes, error } = useHttpWithParam(
        getAllQuestionTypes,
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

    if (status === 'completed' && (!loadedQuestionTypes || loadedQuestionTypes.length === 0)) {
        return <NoQuestionTypesFound />;
    }


    return <QuestionTypeList questionTypes={loadedQuestionTypes} onRefreshRecord={refreshRecordHandler} />;
}

export default AllQuestionTypes;