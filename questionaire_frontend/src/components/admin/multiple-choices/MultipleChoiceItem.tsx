import React, { useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import useHttpWithParam from "../../../hooks/use-httpWithParam";
import { deleteMultipleChoice } from "../../../lib/multiple-choice-api";
import { hideBootstrapModal } from "../../../utils/helpers/utility-functions";
import { ModalParam } from "../../../utils/models/ModalParam";
import { MultipleChoice } from "../../../utils/models/MultipleChoice";
import ModalButtonLink from "../../UI/ModalButtonLink";
import ModalUI from "../../UI/ModalUI";

const MultipleChoiceItem: React.FC<{ multichoice: MultipleChoice, onDeleteMultipleChoice: Function }> = ({ multichoice, onDeleteMultipleChoice }) => {
    const { sendRequest: sendRequestForDelete, status: statusForDelete } = useHttpWithParam(deleteMultipleChoice);

    const history = useHistory();

    const modalParam: ModalParam = {
        title: "Do you want to delete this record?",
        modalId: `multichoiceDelete__${multichoice.id}`,
        actionButtonText: "Delete",
        bodyText: ""
    };

    useEffect(() => {
        if (statusForDelete === 'completed') {
            hideBootstrapModal(`${modalParam.modalId}`);
            onDeleteMultipleChoice(multichoice.id);
        }
    }, [statusForDelete, history]);

    const deleteItemHandler = (multichoiceId: string) => {
        sendRequestForDelete(multichoiceId);
    }

    return (
        <React.Fragment>
            <tr key={multichoice.id}>
                <td>{multichoice.name}</td>
                <td>{multichoice.description}</td>
                <td>{multichoice.created_at}</td>
                <td>{multichoice.updated_at}</td>
                <td>
                    <NavLink className="btn btn-primary btn-sm" to={'/admin/edit-multichoice/' + multichoice.id}>
                        <i className="fas fa-pen"></i>
                    </NavLink>&nbsp;
                    <ModalButtonLink targetId={modalParam.modalId}><i className="far fa-trash-alt"></i></ModalButtonLink>
                    <ModalUI modalParam={modalParam} onActionItem={deleteItemHandler} />
                </td>
            </tr>
        </React.Fragment>
    );
}

export default MultipleChoiceItem;