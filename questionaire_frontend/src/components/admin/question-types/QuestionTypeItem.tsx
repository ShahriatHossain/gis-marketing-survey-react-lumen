import React, { useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import useHttpWithParam from "../../../hooks/use-httpWithParam";
import { deleteQuestionType } from "../../../lib/question-type-api";
import { hideBootstrapModal } from "../../../utils/helpers/utility-functions";
import { ModalParam } from "../../../utils/models/ModalParam";
import { QuestionType } from "../../../utils/models/QuestionType";
import ModalButtonLink from "../../UI/ModalButtonLink";
import ModalUI from "../../UI/ModalUI";

const QuestionTypeItem: React.FC<{ questionType: QuestionType, onDeleteQuestionType: Function }> = ({ questionType, onDeleteQuestionType }) => {
    const { sendRequest: sendRequestForDelete, status: statusForDelete } = useHttpWithParam(deleteQuestionType);

    const history = useHistory();

    const modalParam: ModalParam = {
        title: "Do you want to delete this record?",
        modalId: `questionTypeDelete__${questionType.id}`,
        actionButtonText: "Delete",
        bodyText: ""
    };

    useEffect(() => {
        if (statusForDelete === 'completed') {
            hideBootstrapModal(`${modalParam.modalId}`);
            onDeleteQuestionType(questionType.id);
        }
    }, [statusForDelete, history]);

    const deleteItemHandler = (questionTypeId: string) => {
        sendRequestForDelete(questionTypeId);
    }

    return (
        <React.Fragment>
            <tr key={questionType.id}>
                <td>{questionType.name}</td>
                <td>{questionType.description}</td>
                <td>{questionType.created_at}</td>
                <td>{questionType.updated_at}</td>
                <td>
                    <NavLink className="btn btn-primary btn-sm" to={'/admin/edit-question-type/' + questionType.id}>
                    <i className="fas fa-pen"></i>
                    </NavLink>&nbsp;
                    <ModalButtonLink targetId={modalParam.modalId}><i className="far fa-trash-alt"></i></ModalButtonLink>
                    <ModalUI modalParam={modalParam} onActionItem={deleteItemHandler} />
                </td>
            </tr>
        </React.Fragment>
    );
}

export default QuestionTypeItem;