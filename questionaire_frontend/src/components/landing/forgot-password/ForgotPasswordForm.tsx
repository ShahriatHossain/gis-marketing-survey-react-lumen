import { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { isEmpty, validateEmail } from "../../../utils/helpers/utility-functions";
import SubmitButton from "../../UI/SubmitButton";

const ForgotPasswordForm: React.FC<{ isLoading: boolean, onRequestPasswordReset: Function }> = ({ isLoading, onRequestPasswordReset }) => {
    const [isEntering, setIsEntering] = useState(false);
    const [formInputsValidity, setFormInputsValidity] = useState({
        email: true
    });

    const emailInputRef = useRef<any>();

    const emailChangeHandler = (event: any) => {
        setFormInputsValidity(prevState => {
            return {
                ...prevState,
                email: !isEmpty(event.target.value)
            }
        });
    }

    const submitFormHandler = (event: any) => {
        event.preventDefault();

        const enteredEmail = emailInputRef.current.value;

        // optional: Could validate here
        const enteredEmailIsValid = !isEmpty(enteredEmail) && validateEmail(enteredEmail);

        setFormInputsValidity({
            email: enteredEmailIsValid
        });

        const formIsValid = enteredEmailIsValid;

        if (!formIsValid) {
            return;
        }

        onRequestPasswordReset({
            email: enteredEmail
        });
    }

    const finishEnteringHandler = () => {
        setIsEntering(false);
    };

    const formFocusedHandler = () => {
        setIsEntering(true);
    };

    const emailControlClasses = `form-control ${formInputsValidity.email ? '' : 'is-invalid'}`;

    return (
        <form
            onFocus={formFocusedHandler}
            onSubmit={submitFormHandler}>
            <div className="row justify-content-center">
                <div className="col-lg-5">
                    <div className="card shadow-lg border-0 rounded-lg mt-5">
                        <div className="card-header"><h3 className="text-center font-weight-light my-4">Password Recovery</h3></div>
                        <div className="card-body">
                            <div className="small mb-3 text-muted">Enter your email address and we will send you a link to reset your password.</div>
                            <div className="form-floating mb-3">
                                <input className={emailControlClasses} id="inputEmail" type="email" ref={emailInputRef} onChange={emailChangeHandler} />
                                <label htmlFor="inputEmail">Email address</label>
                                {!formInputsValidity.email && <div className="invalid-feedback">
                                    Please provide a valid email.
                                </div>}
                            </div>
                            <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
                                <NavLink className="small" to="/signin">Return to login</NavLink>
                                <SubmitButton isLoading={isLoading}
                                    clickHandler={finishEnteringHandler}
                                    classes="btn btn-primary">Reset Password</SubmitButton>
                            </div>
                        </div>
                        <div className="card-footer text-center py-3">
                            <div className="small"><NavLink to="/signup">Need an account? Sign up!</NavLink></div>
                        </div>
                    </div>
                </div>
            </div>
        </form>

    );
};

export default ForgotPasswordForm;