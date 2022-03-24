import { Fragment, useRef, useState } from "react";
import { NavLink, Prompt } from "react-router-dom";
import { isEmpty, validateEmail } from "../../../utils/helpers/utility-functions";
import LoadingSpinner from "../../UI/LoadingSpinner";
import SubmitButton from "../../UI/SubmitButton";

const SigninForm: React.FC<{ isLoading: boolean, error: string; onLoginUser: Function }> = ({ isLoading, error, onLoginUser }) => {
    const [isEntering, setIsEntering] = useState(false);
    const [formInputsValidity, setFormInputsValidity] = useState({
        email: true,
        password: true
    });

    const emailInputRef = useRef<any>();
    const passwordInputRef = useRef<any>();

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

        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;

        // optional: Could validate here
        const enteredEmailIsValid = !isEmpty(enteredEmail) && validateEmail(enteredEmail);
        const enteredPasswordIsValid = !isEmpty(enteredPassword);

        setFormInputsValidity({
            email: enteredEmailIsValid,
            password: enteredPasswordIsValid,
        });

        const formIsValid = enteredEmailIsValid && enteredPasswordIsValid;

        if (!formIsValid) {
            return;
        }

        onLoginUser({
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

    const emailControlClasses = `form-control ${formInputsValidity.email ? '' : 'is-invalid'}`;
    const passwordControlClasses = `form-select ${formInputsValidity.password ? '' : 'is-invalid'}`;
    return (
        <Fragment>
            <form
                onFocus={formFocusedHandler}
                onSubmit={submitFormHandler}>

                <div className="row justify-content-center">
                    <div className="col-lg-5">
                        <div className="card shadow-lg border-0 rounded-lg mt-5">
                            <div className="card-header"><h3 className="text-center font-weight-light my-4">Login</h3></div>
                            <div className="card-body">
                                {error && <p className="text-danger text-center">{error}</p>}
                                <div className="form-floating mb-3">
                                    <input className={emailControlClasses} id="inputEmail" type="email" ref={emailInputRef} onChange={emailChangeHandler} />
                                    <label htmlFor="inputEmail">Email address</label>
                                    {!formInputsValidity.email && <div className="invalid-feedback">
                                        Please provide a valid email.
                                    </div>}
                                </div>
                                <div className="form-floating mb-3">
                                    <input className={passwordControlClasses} id="inputPassword" type="password" ref={passwordInputRef} onChange={passwordChangeHandler} />
                                    <label htmlFor="inputPassword">Password</label>
                                    {!formInputsValidity.password && <div className="invalid-feedback">
                                        Please provide a valid password.
                                    </div>}
                                </div>
                                <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
                                    <NavLink className="small" to="/forgot-password">Forgot Password?</NavLink>
                                    <SubmitButton isLoading={isLoading}
                                        clickHandler={finishEnteringHandler}
                                        classes="btn btn-primary">Login</SubmitButton>
                                </div>
                            </div>
                            <div className="card-footer text-center py-3">
                                <div className="small"><NavLink to="/signup">Need an account? Sign up!</NavLink></div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </Fragment>
    )
};

export default SigninForm; 