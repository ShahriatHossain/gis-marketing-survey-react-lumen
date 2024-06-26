import React, { useRef, useState } from "react";
import { NavLink, Prompt } from "react-router-dom";
import { isEmpty } from "../../../utils/helpers/utility-functions";
import LoadingSpinner from "../../UI/LoadingSpinner";
import SubmitButton from "../../UI/SubmitButton";

const NewBusinessTypeForm: React.FC<{ isLoading: boolean, onAddBusinessType: Function }> = ({ isLoading, onAddBusinessType }) => {
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

        onAddBusinessType({ name: enteredName, description: enteredDescription });
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

                <div className="row mb-3">
                    <label htmlFor="name" className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-10">
                        <input type="text" className={nameControlClasses} id="name" ref={nameInputRef} onChange={nameChangeHandler} />
                        {!formInputsValidity.name && <div className="invalid-feedback">
                            Please provide a valid name.
                        </div>}
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="description" className="col-sm-2 col-form-label">Description</label>
                    <div className="col-sm-10">
                        <textarea className="form-control" id="description" ref={descriptionInputRef}></textarea>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-sm-2">&nbsp;</div>
                    <div className="col-sm-10">
                        <SubmitButton isLoading={isLoading}
                            clickHandler={finishEnteringHandler}
                            classes="btn btn-primary">Add Business Type</SubmitButton>
                        <NavLink className="btn btn-secondary ms-2" to={"/admin/business-types"}>Cancel</NavLink>
                    </div>
                </div>

            </form>
        </React.Fragment>
    );
}

export default NewBusinessTypeForm;