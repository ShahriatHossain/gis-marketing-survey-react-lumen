import React, { useEffect, useRef, useState } from "react";
import { NavLink, Prompt } from "react-router-dom";
import { isEmpty } from "../../../utils/helpers/utility-functions";
import { Question } from "../../../utils/models/Question";
import LoadingSpinner from "../../UI/LoadingSpinner";
import SubmitButton from "../../UI/SubmitButton";

const NewMultipleChoiceForm: React.FC<{ isLoading: boolean, questions: Question[], onAddMultipleChoice: Function }> = ({ isLoading, questions, onAddMultipleChoice }) => {
    const [isEntering, setIsEntering] = useState(false);
    const [didMount, setDidMount] = useState(false);
    const [formInputsValidity, setFormInputsValidity] = useState({
        label: true,
        value: true,
        question: true
    });

    useEffect(() => {
        setDidMount(true);
        return () => setDidMount(false);
    }, []);

    const labelInputRef = useRef<any>();
    const valueInputRef = useRef<any>();
    const selectedInputRef = useRef<any>();
    const questionInputRef = useRef<any>();

    const labelChangeHandler = (event: any) => {
        setFormInputsValidity(prevState => {
            return {
                ...prevState,
                label: !isEmpty(event.target.value)
            }
        });
    }

    const valueChangeHandler = (event: any) => {
        setFormInputsValidity(prevState => {
            return {
                ...prevState,
                value: !isEmpty(event.target.value)
            }
        });
    }

    const questionChangeHandler = (event: any) => {
        setFormInputsValidity(prevState => {
            return {
                ...prevState,
                question: !isEmpty(event.target.value)
            }
        });
    }

    const submitFormHandler = (event: any) => {
        event.preventDefault();

        const enteredLabel = labelInputRef.current.value;
        const enteredValue = valueInputRef.current.value;
        const enteredSelected = selectedInputRef.current.checked;
        const enteredQuestion = questionInputRef.current.value;

        // optional: Could validate here
        const enteredLabelIsValid = !isEmpty(enteredLabel);
        const enteredValueIsValid = !isEmpty(enteredValue);
        const enteredQuestionIsValid = !isEmpty(enteredQuestion);


        setFormInputsValidity({
            label: enteredLabelIsValid,
            value: enteredValueIsValid,
            question: enteredQuestionIsValid
        });

        const formIsValid = enteredLabelIsValid && enteredValueIsValid && enteredQuestionIsValid;

        if (!formIsValid) {
            return;
        }

        onAddMultipleChoice({ label: enteredLabel, value: enteredValue, selected: enteredSelected, question_id: enteredQuestion });
    }

    const finishEnteringHandler = () => {
        setIsEntering(false);
    };

    const formFocusedHandler = () => {
        setIsEntering(true);
    };

    const labelControlClasses = `form-control ${formInputsValidity.label ? '' : 'is-invalid'}`;
    const valueControlClasses = `form-control ${formInputsValidity.value ? '' : 'is-invalid'}`;
    const questionControlClasses = `form-select ${formInputsValidity.question ? '' : 'is-invalid'}`;

    if (!didMount) {
        return null;
    }

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
                    <label htmlFor="label" className="col-sm-2 col-form-label">Label</label>
                    <div className="col-sm-10">
                        <input type="text" className={labelControlClasses} id="label" ref={labelInputRef} onChange={labelChangeHandler} />
                        {!formInputsValidity.label && <div className="invalid-feedback">
                            Please provide a valid label.
                        </div>}
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="value" className="col-sm-2 col-form-label">Value</label>
                    <div className="col-sm-10">
                        <input type="text" className={valueControlClasses} id="value" ref={valueInputRef} onChange={valueChangeHandler} />
                        {!formInputsValidity.value && <div className="invalid-feedback">
                            Please provide a valid value.
                        </div>}
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="question_id" className="col-sm-2 col-form-label">Question</label>
                    <div className="col-sm-10">
                        <select className={questionControlClasses} id="question_id" ref={questionInputRef} aria-label="Select Question" onChange={questionChangeHandler}>
                            <option value="">Choose...</option>
                            {questions && questions.map(question => <option key={question.id} value={question.id}>{question.title}</option>)}
                        </select>
                        {!formInputsValidity.question && <div className="invalid-feedback">
                            Please choose a question.
                        </div>}
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="selected" className="col-sm-2 col-form-label">Selected?</label>
                    <div className="col-sm-10">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="selected" ref={selectedInputRef} />
                        </div>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-sm-2">&nbsp;</div>
                    <div className="col-sm-10">
                        <SubmitButton isLoading={isLoading}
                            clickHandler={finishEnteringHandler}
                            classes="btn btn-primary btn-sm">Add Multiple Choice</SubmitButton>
                        <NavLink className="btn btn-secondary btn-sm ms-2" to={"/admin/multichoices"}>Cancel</NavLink>
                    </div>
                </div>

            </form>
        </React.Fragment>
    );
}

export default NewMultipleChoiceForm;