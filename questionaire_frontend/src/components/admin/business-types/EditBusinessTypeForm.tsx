import React, { useRef, useState } from "react";
import { NavLink, Prompt } from "react-router-dom";
import { isEmpty } from "../../../utils/helpers/utility-functions";
import LoadingSpinner from "../../UI/LoadingSpinner";

const EditBusinessTypeForm: React.FC<{ existingData: any, isLoading: boolean, onEditBusinessType: Function }> = ({ existingData, isLoading, onEditBusinessType }) => {
    const [isEntering, setIsEntering] = useState(false);
    const [formInputsValidity, setFormInputsValidity] = useState({
        name: true
    });

    const nameInputRef = useRef<any>();
    const descriptionInputRef = useRef<any>();

    const nameChangeHandler = (event: any) => {
        setFormInputsValidity(prevState => {
            return {
                ...prevState,
                name: !isEmpty(event.target.value)
            }
        });
    }

    const submitFormHandler = (event: any) => {
        event.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;

        // optional: Could validate here
        const enteredNameIsValid = !isEmpty(enteredName);

        setFormInputsValidity({
            name: enteredNameIsValid
        });

        const formIsValid = enteredNameIsValid;

        if (!formIsValid) {
            return;
        }

        onEditBusinessType({ id: existingData.id, name: enteredName, description: enteredDescription });
    }

    const finishEnteringHandler = () => {
        setIsEntering(false);
    };

    const formFocusedHandler = () => {
        setIsEntering(true);
    };

    const nameControlClasses = `form-control ${formInputsValidity.name ? '' : 'is-invalid'}`;

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
                        <input type="text" className={nameControlClasses} defaultValue={existingData.name} id="name" ref={nameInputRef} onChange={nameChangeHandler} />
                        {!formInputsValidity.name && <div className="invalid-feedback">
                            Please provide a valid name.
                        </div>}
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
                        <NavLink className="btn btn-secondary ms-2" to={"/admin/business-types"}>Cancel</NavLink>
                    </div>
                </div>

            </form>
        </React.Fragment>
    );
}

export default EditBusinessTypeForm;