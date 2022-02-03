import React, { useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import useHttpWithParam from "../../../hooks/use-httpWithParam";
import { deleteQuestion } from "../../../lib/question-api";
import { hideBootstrapModal } from "../../../utils/helpers/utility-functions";
import { ModalParam } from "../../../utils/models/ModalParam";
import { Question } from "../../../utils/models/Question";
import ModalButtonLink from "../../UI/ModalButtonLink";
import ModalUI from "../../UI/ModalUI";

const QuestionItem: React.FC<{ question: Question, onDeleteQuestion: Function }> = ({ question, onDeleteQuestion }) => {
    const { sendRequest: sendRequestForDelete, status: statusForDelete } = useHttpWithParam(deleteQuestion);

    const history = useHistory();

    const modalParam: ModalParam = {
        title: "Do you want to delete this record?",
        modalId: `questionDelete__${question.id}`,
        actionButtonText: "Delete",
        bodyText: ""
    };

    useEffect(() => {
        if (statusForDelete === 'completed') {
            hideBootstrapModal(`${modalParam.modalId}`);
            onDeleteQuestion(question.id);
        }
    }, [statusForDelete, history]);

    const deleteItemHandler = (questionId: string) => {
        sendRequestForDelete(question);
    }

    return (
        <React.Fragment>
            <tr key={question.id}>
                <td>{question.title}</td>
                <td>{question.survey_name}</td>
                <td>{question.question_type_description}</td>
                <td>{question.description}</td>
                <td>{question.created_at}</td>
                <td>{question.updated_at}</td>
                <td>
                    <NavLink className="btn btn-primary btn-sm" to={`/admin/edit-question/${question.survey_id}/${question.id}`}>
                        <i className="fas fa-pen"></i>
                    </NavLink>&nbsp;
                    <ModalButtonLink targetId={modalParam.modalId}><i className="far fa-trash-alt"></i></ModalButtonLink>
                    <ModalUI modalParam={modalParam} onActionItem={deleteItemHandler} />
                </td>
            </tr>
        </React.Fragment>
    );
}

export default QuestionItem;