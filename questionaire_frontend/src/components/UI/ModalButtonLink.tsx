const ModalButtonLink: React.FC<{ targetId: string }> = (props) => {
    return (
        <a className="btn btn-danger btn-sm" data-bs-toggle="modal" data-bs-target={'#' + props.targetId}>
            {props.children}
        </a>
    );
}

export default ModalButtonLink;