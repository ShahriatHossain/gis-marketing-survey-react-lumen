import { Fragment, useRef, useState } from "react";
import { NavLink, Prompt } from "react-router-dom";
import { DefaultSignupRole } from "../../../utils/constants/common";
import { isEmpty, validateEmail } from "../../../utils/helpers/utility-functions";
import LoadingSpinner from "../../UI/LoadingSpinner";
import SubmitButton from "../../UI/SubmitButton";

const SignupForm: React.FC<{ isLoading: boolean, error: string, onAddCustomer: Function }>
    = ({ isLoading, error, onAddCustomer }) => {
        const [isEntering, setIsEntering] = useState(false);
        const [formInputsValidity, setFormInputsValidity] = useState({
            name: true,
            email: true,
            password: true,
            cPassword: true
        });

        const nameInputRef = useRef<any>();
        const emailInputRef = useRef<any>();
        const passwordInputRef = useRef<any>();
        const cPasswordInputRef = useRef<any>();
        const roleInputRef = useRef<any>();

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
            const enteredEmail = emailInputRef.current.value;
            const enteredPassword = passwordInputRef.current.value;
            const enteredCPassword = cPasswordInputRef.current.value;
            const enteredDefaultRole = roleInputRef.current.value;

            // optional: Could validate here
            const enteredNameIsValid = !isEmpty(enteredName);
            const enteredEmailIsValid = !isEmpty(enteredEmail) && validateEmail(enteredEmail);
            const enteredPasswordIsValid = !isEmpty(enteredPassword);
            const enteredCPasswordIsValid = !isEmpty(enteredCPassword) && (enteredPassword === enteredCPassword);

            setFormInputsValidity({
                name: enteredNameIsValid,
                email: enteredEmailIsValid,
                password: enteredPasswordIsValid,
                cPassword: enteredCPasswordIsValid
            });

            const formIsValid = enteredNameIsValid && enteredEmailIsValid
                && enteredPasswordIsValid && enteredCPasswordIsValid;

            if (!formIsValid) {
                return;
            }

            onAddCustomer({
                name: enteredName,
                email: enteredEmail,
                password: enteredPassword,
                password_confirmation: enteredCPassword,
                role_id: enteredDefaultRole
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
        const cPasswordControlClasses = `form-select ${formInputsValidity.cPassword ? '' : 'is-invalid'}`;

        return (
            <Fragment>
                
                <form
                    onFocus={formFocusedHandler}
                    onSubmit={submitFormHandler}>
                    
                    <div className="row justify-content-center">
                        <div className="col-lg-7">
                            <div className="card shadow-lg border-0 rounded-lg mt-5">
                                <div className="card-header"><h3 className="text-center font-weight-light my-4">Create Account</h3></div>
                                <div className="card-body">
                                    {error && <p className="text-danger text-center">{error}</p>}
                                    <div className="row mb-3">
                                        <div className="col-md-12">
                                            <div className="form-floating mb-3 mb-md-0">
                                                <input className={nameControlClasses} id="inputName" type="text" ref={nameInputRef} onChange={nameChangeHandler} placeholder="Enter your name" />
                                                <label htmlFor="inputName">Name</label>
                                                {!formInputsValidity.name && <div className="invalid-feedback">
                                                    Please provide a valid name.
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

                                        <input type="hidden" name="role_id" value={DefaultSignupRole} ref={roleInputRef} />
                                    </div>
                                    <div className="mt-4 mb-0">
                                        <div className="d-grid">
                                            <SubmitButton isLoading={isLoading}
                                                clickHandler={finishEnteringHandler}
                                                classes="btn btn-primary btn-sm btn-block">Create Account</SubmitButton>
                                        </div>
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