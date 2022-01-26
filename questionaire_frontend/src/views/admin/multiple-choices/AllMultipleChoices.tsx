import React, { useEffect } from "react";
import NoMultipleChoicesFound from "../../../components/admin/multiple-choices/NoMultipleChoicesFound";
import MultipleChoiceList from "../../../components/admin/multiple-choices/MultipleChoiceList";
import LoadingSpinner from "../../../components/UI/LoadingSpinner";
import useHttpWithParam from "../../../hooks/use-httpWithParam";
import { getAllMultipleChoices } from "../../../lib/multiple-choice-api";

const AllMultipleChoices: React.FC = () => {
    const { sendRequest, status, data: loadedMultipleChoices, error } = useHttpWithParam(
        getAllMultipleChoices,
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

    if (status === 'completed' && (!loadedMultipleChoices || loadedMultipleChoices.length === 0)) {
        return <NoMultipleChoicesFound />;
    }


    return <MultipleChoiceList multichoices={loadedMultipleChoices} onRefreshRecord={refreshRecordHandler} />;
}

export default AllMultipleChoices;