const SpinnerButton: React.FC<{}> = (props) => {
    return (
        <>
            <button className="btn btn-primary" type="button" disabled>
                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                {props.children}
            </button>
        </>
    );
};

export default SpinnerButton;