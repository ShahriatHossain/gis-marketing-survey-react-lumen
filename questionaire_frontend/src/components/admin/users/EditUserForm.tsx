import React, { useEffect, useRef, useState } from "react";
import { NavLink, Prompt } from "react-router-dom";
import { isEmpty, validateEmail } from "../../../utils/helpers/utility-functions";
import { BusinessType } from "../../../utils/models/BusinessType";
import LoadingSpinner from "../../UI/LoadingSpinner";
import SubmitButton from "../../UI/SubmitButton";

const EditUserForm: React.FC<{ existingData: any, isLoading: boolean, onEditUser: Function }> = ({ existingData, isLoading, onEditUser }) => {
    const [isEntering, setIsEntering] = useState(false);
    const [formInputsValidity, setFormInputsValidity] = useState({
        name: true,
        email: true
    });

    const nameChangeHandler = (event: any) => {
        setFormInputsValidity(prevState => {
            return {
                ...prevState,
                name: !isEmpty(event.target.value)
            }
        });
    }

    const emailChangeHandler = (event: any) => {
        setFormInputsValidity(prevState => {
            return {
                ...prevState,
                email: !isEmpty(event.target.value)
            }
        });
    }

    const nameInputRef = useRef<any>();
    const emailInputRef = useRef<any>();

    const submitFormHandler = (event: any) => {
        event.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredEmail = emailInputRef.current.value;

        // optional: Could validate here
        const enteredNameIsValid = !isEmpty(enteredName);
        const enteredEmailIsValid = !isEmpty(enteredEmail) && validateEmail(enteredEmail);

        setFormInputsValidity({
            name: enteredNameIsValid,
            email: enteredEmailIsValid
        });

        const formIsValid = enteredNameIsValid && enteredEmailIsValid;

        if (!formIsValid) {
            return;
        }

        onEditUser({
            id: existingData.id,
            name: enteredName,
            email: enteredEmail
        });
    }

    const finishEnteringHandler = () => {
        setIsEntering(false);
    };

    const formFocusedHandler = () => {
        setIsEntering(true);
    };

    const nameControlClasses = `form-control ${formInputsValidity.name ? '' : 'is-invalid'}`;
    const emailControlClasses = `form-control ${formInputsValidity.email ? '' : 'is-invalid'}`;

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

                <div className="row">
                    <div className="col">
                        <div className="row mb-3">
                            <div className="col-sm-12">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input type="text" className={nameControlClasses} id="name" defaultValue={existingData.name} ref={nameInputRef} onChange={nameChangeHandler} />
                                {!formInputsValidity.name && <div className="invalid-feedback">
                                    Please provide a valid name.
                                </div>}
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-sm-12">
                                <label htmlFor="email" className="form-label" >Email</label>
                                <input type="text" className={emailControlClasses} id="email" ref={emailInputRef} defaultValue={existingData.email} onChange={emailChangeHandler} />
                                {!formInputsValidity.email && <div className="invalid-feedback">
                                    Please provide valid email.
                                </div>}
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="row mb-3">
                    <div className="col-sm-2">&nbsp;</div>
                    <div className="col-sm-10">
                        <SubmitButton isLoading={isLoading}
                            clickHandler={finishEnteringHandler}
                            classes="btn btn-primary">Edit User</SubmitButton>
                        <NavLink className="btn btn-secondary ms-2" to={"/admin/users"}>Cancel</NavLink>
                    </div>
                </div>

            </form>
        </React.Fragment>
    );
}

export default EditUserForm;