import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import NewMultipleChoiceForm from "../../../components/admin/multiple-choices/NewMultipleChoiceForm";
import useHttpWithParam from "../../../hooks/use-httpWithParam";
import { addMultipleChoice } from "../../../lib/multiple-choice-api";

const NewMultipleChoice: React.FC = () => {
    const { sendRequest, status } = useHttpWithParam(addMultipleChoice);
    const history = useHistory();

    useEffect(() => {
        if (status === 'completed') {
            history.push('/admin/multichoices');
        }
    }, [status, history]);

    const addMultipleChoiceHandler = (multichoiceData: any) => {
        sendRequest(multichoiceData);
    };

    return <NewMultipleChoiceForm isLoading={status === 'pending'} onAddMultipleChoice={addMultipleChoiceHandler} />;
};

export default NewMultipleChoice;