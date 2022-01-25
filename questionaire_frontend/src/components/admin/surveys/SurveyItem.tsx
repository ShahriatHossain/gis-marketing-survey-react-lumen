import React, { useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import useHttpWithParam from "../../../hooks/use-httpWithParam";
import { deleteSurvey } from "../../../lib/survey-api";
import { hideBootstrapModal } from "../../../utils/helpers/utility-functions";
import { ModalParam } from "../../../utils/models/ModalParam";
import { Survey } from "../../../utils/models/Survey";
import ModalButtonLink from "../../UI/ModalButtonLink";
import ModalUI from "../../UI/ModalUI";

const SurveyItem: React.FC<{ survey: Survey, onDeleteSurvey: Function }> = ({ survey, onDeleteSurvey }) => {
    const { sendRequest: sendRequestForDelete, status: statusForDelete } = useHttpWithParam(deleteSurvey);

    const history = useHistory();

    const modalParam: ModalParam = {
        title: "Do you want to delete this record?",
        modalId: `surveyDelete__${survey.id}`,
        actionButtonText: "Delete",
        bodyText: ""
    };

    useEffect(() => {
        if (statusForDelete === 'completed') {
            hideBootstrapModal(`${modalParam.modalId}`);
            onDeleteSurvey(survey.id);
        }
    }, [statusForDelete, history]);

    const deleteItemHandler = (surveyId: string) => {
        sendRequestForDelete(surveyId);
    }

    return (
        <React.Fragment>
            <tr key={survey.id}>
                <td>{survey.name}</td>
                <td>{survey.description}</td>
                <td>{survey.created_at}</td>
                <td>{survey.updated_at}</td>
                <td>
                    <NavLink className="btn btn-primary btn-sm" to={'/admin/edit-survey/' + survey.id}>
                    <i className="fas fa-pen"></i>
                    </NavLink>&nbsp;
                    <ModalButtonLink targetId={modalParam.modalId}><i className="far fa-trash-alt"></i></ModalButtonLink>
                    <ModalUI modalParam={modalParam} onActionItem={deleteItemHandler} />
                </td>
            </tr>
        </React.Fragment>
    );
}

export default SurveyItem;