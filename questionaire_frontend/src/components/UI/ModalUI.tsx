import { ModalParam } from "../../utils/models/ModalParam";

const ModalUI: React.FC<{ modalParam: ModalParam, onActionItem: Function }> = ({ modalParam, onActionItem }) => {
    const itemId = modalParam.modalId.split("__")[1];

    const saveChangeHandler = (event: any) => {
        event.preventDefault();

        onActionItem(itemId);
    }

    return (
        <div className="modal fade" id={modalParam.modalId} tabIndex={-1} aria-labelledby={modalParam.modalId + 'Label'} aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        {modalParam.title && <h5 className="modal-title" id={modalParam.modalId + 'Label'}>{modalParam.title}</h5>}
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    {modalParam.bodyText && <div className="modal-body">{modalParam.bodyText}</div>}
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary" onClick={saveChangeHandler}>{modalParam.actionButtonText}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalUI;