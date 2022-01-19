import React, { useRef, useState } from "react";
import { NavLink, Prompt } from "react-router-dom";
import LoadingSpinner from "../../UI/LoadingSpinner";

const EditBusinessTypeForm: React.FC<{ existingData: any, isLoading: boolean, onEditBusinessType: Function }> = ({ existingData, isLoading, onEditBusinessType }) => {
    const [isEntering, setIsEntering] = useState(false);

    const nameInputRef = useRef<any>();
    const descriptionInputRef = useRef<any>();

    const submitFormHandler = (event: any) => {
        event.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;

        // optional: Could validate here

        onEditBusinessType({ id: existingData.id, name: enteredName, description: enteredDescription });
    }

    const finishEnteringHandler = () => {
        setIsEntering(false);
    };

    const formFocusedHandler = () => {
        setIsEntering(true);
    };

    return (
        <React.Fragment>
            <Prompt
                when={isEntering}
                message={(location) =>
                    'Are you sure you want to leave? All your entered data will be lost!'
                }
            />
            <form
                onFocus={formFocusedHandler}
                onSubmit={submitFormHandler}>
                {isLoading && (
                    <React.Fragment>
                        <LoadingSpinner />
                    </React.Fragment>
                )}

                <div className="row mb-3">
                    <label htmlFor="name" className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-10">
                        <input type="text" defaultValue={existingData.name} className="form-control" id="name" ref={nameInputRef} />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="description" className="col-sm-2 col-form-label">Description</label>
                    <div className="col-sm-10">
                        <textarea className="form-control" id="description" defaultValue={existingData.description} ref={descriptionInputRef}></textarea>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-sm-2">&nbsp;</div>
                    <div className="col-sm-10">
                        <button onClick={finishEnteringHandler} className="btn btn-primary">Edit Business Type</button>
                        <NavLink className="btn btn-secondary ms-2" to={"/business-types"}>Cancel</NavLink>
                    </div>
                </div>

            </form>
        </React.Fragment>
    );
}

export default EditBusinessTypeForm;