import { Fragment, useRef, useState } from "react";
import { NavLink, Prompt } from "react-router-dom";
import { isEmpty, validateEmail } from "../../../utils/helpers/utility-functions";
import LoadingSpinner from "../../UI/LoadingSpinner";

const SignupForm: React.FC<{ isLoading: boolean, onAddCustomer: Function }> = ({ isLoading, onAddCustomer }) => {
    const [isEntering, setIsEntering] = useState(false);
    const [formInputsValidity, setFormInputsValidity] = useState({
        name: true,
        contactName: true,
        email: true,
        password: true,
        cPassword: true
    });

    const nameInputRef = useRef<any>();
    const contactNameInputRef = useRef<any>();
    const emailInputRef = useRef<any>();
    const passwordInputRef = useRef<any>();
    const cPasswordInputRef = useRef<any>();

    const nameChangeHandler = (event: any) => {
        setFormInputsValidity(prevState => {
            return {
                ...prevState,
                name: !isEmpty(event.target.value)
            }
        });
    }

    const contactNameChangeHandler = (event: any) => {
        setFormInputsValidity(prevState => {
            return {
                ...prevState,
                contactName: !isEmpty(event.target.value)
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

    const cPasswordChangeHandler = (event: any) => {
        setFormInputsValidity(prevState => {
            return {
                ...prevState,
                cPassword: !isEmpty(event.target.value)
            }
        });
    }

    const submitFormHandler = (event: any) => {
        event.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredContactName = contactNameInputRef.current.value;
        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;
        const enteredCPassword = cPasswordInputRef.current.value;

        // optional: Could validate here
        const enteredNameIsValid = !isEmpty(enteredName);
        const enteredContactNameIsValid = !isEmpty(enteredContactName);
        const enteredEmailIsValid = !isEmpty(enteredEmail) && validateEmail(enteredEmail);
        const enteredPasswordIsValid = !isEmpty(enteredPassword);
        const enteredCPasswordIsValid = !isEmpty(enteredCPassword) && (enteredPassword === enteredCPassword);

        setFormInputsValidity({
            name: enteredNameIsValid,
            email: enteredEmailIsValid,
            contactName: enteredContactNameIsValid,
            password: enteredPasswordIsValid,
            cPassword: enteredCPasswordIsValid
        });

        const formIsValid = enteredNameIsValid && enteredEmailIsValid && enteredContactNameIsValid
            && enteredPasswordIsValid && enteredCPasswordIsValid;

        if (!formIsValid) {
            return;
        }

        onAddCustomer({
            name: enteredName,
            contact_name: enteredContactName,
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
    const contactNameControlClasses = `form-select ${formInputsValidity.contactName ? '' : 'is-invalid'}`;
    const passwordControlClasses = `form-select ${formInputsValidity.password ? '' : 'is-invalid'}`;
    const cPasswordControlClasses = `form-select ${formInputsValidity.cPassword ? '' : 'is-invalid'}`;

    return (
        <Fragment>
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
                    <Fragment>
                        <LoadingSpinner />
                    </Fragment>
                )}
                <div className="row justify-content-center">
                    <div className="col-lg-7">
                        <div className="card shadow-lg border-0 rounded-lg mt-5">
                            <div className="card-header"><h3 className="text-center font-weight-light my-4">Create Account</h3></div>
                            <div className="card-body">
                                <div className="row mb-3">
                                    <div className="col-md-6">
                                        <div className="form-floating mb-3 mb-md-0">
                                            <input className={nameControlClasses} id="inputName" type="text" ref={nameInputRef} onChange={nameChangeHandler} placeholder="Enter your name" />
                                            <label htmlFor="inputName">Name</label>
                                            {!formInputsValidity.name && <div className="invalid-feedback">
                                                Please provide a valid name.
                                            </div>}
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input className={contactNameControlClasses} id="inputContactName" type="text" ref={contactNameInputRef} onChange={contactNameChangeHandler} placeholder="Enter your contact name" />
                                            <label htmlFor="inputContactName">Contact name</label>
                                            {!formInputsValidity.contactName && <div className="invalid-feedback">
                                                Please provide a valid contact name.
                                            </div>}
                                        </div>
                                    </div>
                                </div>
                                <div className="form-floating mb-3">
                                    <input className={emailControlClasses} id="inputEmail" type="email" ref={emailInputRef} onChange={emailChangeHandler} placeholder="name@example.com" />
                                    <label htmlFor="inputEmail">Email address</label>
                                    {!formInputsValidity.email && <div className="invalid-feedback">
                                        Please provide a valid email.
                                    </div>}
                                </div>
                                <div className="row mb-3">
                                    <div className="col-md-6">
                                        <div className="form-floating mb-3 mb-md-0">
                                            <input className={passwordControlClasses} id="inputPassword" type="password" ref={passwordInputRef} onChange={passwordChangeHandler} placeholder="Create a password" />
                                            <label htmlFor="inputPassword">Password</label>
                                            {!formInputsValidity.password && <div className="invalid-feedback">
                                                Please provide a valid password.
                                            </div>}
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating mb-3 mb-md-0">
                                            <input className={cPasswordControlClasses} id="inputPasswordConfirm" type="password" ref={cPasswordInputRef} onChange={cPasswordChangeHandler} placeholder="Confirm password" />
                                            <label htmlFor="inputPasswordConfirm">Confirm Password</label>
                                            {!formInputsValidity.cPassword && <div className="invalid-feedback">
                                                Password doesn't match or can't be empty.
                                            </div>}
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4 mb-0">
                                    <div className="d-grid"><button onClick={finishEnteringHandler} className="btn btn-primary btn-block">Create Account</button></div>
                                </div>
                            </div>
                            <div className="card-footer text-center py-3">
                                <div className="small"><NavLink to="/signin">Have an account? Go to login</NavLink></div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </Fragment>
    );
};

export default SignupForm;