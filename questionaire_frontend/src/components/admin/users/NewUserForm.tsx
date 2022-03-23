import React, { useRef, useState } from "react";
import { NavLink, Prompt } from "react-router-dom";
import { isEmpty, validateEmail } from "../../../utils/helpers/utility-functions";
import { BusinessType } from "../../../utils/models/BusinessType";
import LoadingSpinner from "../../UI/LoadingSpinner";
import SubmitButton from "../../UI/SubmitButton";

const NewUserForm: React.FC<{ isLoading: boolean, businessTypes: BusinessType[], onAddUser: Function }> = ({ isLoading, businessTypes, onAddUser }) => {
    const [isEntering, setIsEntering] = useState(false);
    const [formInputsValidity, setFormInputsValidity] = useState({
        name: true,
        email: true,
        password: true
    });

    const nameInputRef = useRef<any>();
    const emailInputRef = useRef<any>();
    const passwordInputRef = useRef<any>();

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

    const passwordChangeHandler = (event: any) => {
        setFormInputsValidity(prevState => {
            return {
                ...prevState,
                password: !isEmpty(event.target.value)
            }
        });
    }

    const submitFormHandler = (event: any) => {
        event.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;

        // optional: Could validate here
        const enteredNameIsValid = !isEmpty(enteredName);
        const enteredEmailIsValid = !isEmpty(enteredEmail) && validateEmail(enteredEmail);
        const enteredPasswordIsValid = !isEmpty(enteredPassword);

        setFormInputsValidity({
            name: enteredNameIsValid,
            email: enteredEmailIsValid,
            password: enteredPasswordIsValid
        });

        const formIsValid = enteredNameIsValid && enteredEmailIsValid && enteredPasswordIsValid;

        if (!formIsValid) {
            return;
        }

        onAddUser({
            name: enteredName,
            email: enteredEmail,
            password: enteredPassword
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
    const passwordControlClasses = `form-select ${formInputsValidity.password ? '' : 'is-invalid'}`;

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
                                <input type="text" className={nameControlClasses} id="name" ref={nameInputRef} onChange={nameChangeHandler} />
                                {!formInputsValidity.name && <div className="invalid-feedback">
                                    Please provide a valid name.
                                </div>}
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-sm-12">
                                <label htmlFor="email" className="form-label" >Email</label>
                                <input type="text" className={emailControlClasses} id="email" ref={emailInputRef} onChange={emailChangeHandler} />
                                {!formInputsValidity.email && <div className="invalid-feedback">
                                    Please provide valid email.
                                </div>}
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-sm-12">
                                <label htmlFor="password" className="form-label" >Password</label>
                                <input type="text" className={passwordControlClasses} id="password" ref={passwordInputRef} onChange={passwordChangeHandler} />
                                {!formInputsValidity.password && <div className="invalid-feedback">
                                    Please provide password.
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
                            classes="btn btn-primary">Add User</SubmitButton>
                        <NavLink className="btn btn-secondary ms-2" to={"/admin/users"}>Cancel</NavLink>
                    </div>
                </div>

            </form>
        </React.Fragment>
    );
}

export default NewUserForm;