import React, { useEffect, useRef, useState } from "react";
import { NavLink, Prompt } from "react-router-dom";
import { isEmpty } from "../../../utils/helpers/utility-functions";
import { MultipleChoice } from "../../../utils/models/MultipleChoice";
import { Question } from "../../../utils/models/Question";
import LoadingSpinner from "../../UI/LoadingSpinner";

const EditMultipleChoiceForm: React.FC<{ existingData: MultipleChoice, isLoading: boolean, questions: Question[], onEditMultipleChoice: Function }> = ({ existingData, isLoading, questions, onEditMultipleChoice }) => {
    const [isEntering, setIsEntering] = useState(false);
    const [selectedQuestion, setSelectedQuestion] = useState("");
    const [formInputsValidity, setFormInputsValidity] = useState({
        label: true,
        value: true,
        question: true
    });

    const labelInputRef = useRef<any>();
    const valueInputRef = useRef<any>();
    const selectedInputRef = useRef<any>();

    useEffect(() => {
        setSelectedQuestion(existingData.question_id.toString());
    }, []);

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
        setSelectedQuestion(event.target.value);
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
        const enteredQuestion = selectedQuestion;

        // optional: Could validate here
        const enteredLabelIsValid = !isEmpty(enteredLabel);
        const enteredValueIsValid = !isEmpty(enteredValue);
        let enteredQuestionIsValid = true;
        if (typeof enteredQuestion == 'string') {
            enteredQuestionIsValid = !isEmpty(enteredQuestion);
        }


        setFormInputsValidity({
            label: enteredLabelIsValid,
            value: enteredValueIsValid,
            question: enteredQuestionIsValid
        });

        const formIsValid = enteredLabelIsValid && enteredValueIsValid && enteredQuestionIsValid;

        if (!formIsValid) {
            return;
        }

        onEditMultipleChoice({ id: existingData.id, label: enteredLabel, value: enteredValue, selected: enteredSelected, question_id: enteredQuestion });
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
                    <label htmlFor="label" className="col-sm-2 col-form-label">Label</label>
                    <div className="col-sm-10">
                        <input type="text" className={labelControlClasses} id="label" defaultValue={existingData.label} ref={labelInputRef} onChange={labelChangeHandler} />
                        {!formInputsValidity.label && <div className="invalid-feedback">
                            Please provide a valid label.
                        </div>}
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="value" className="col-sm-2 col-form-label">Value</label>
                    <div className="col-sm-10">
                        <input type="text" className={valueControlClasses} id="value" defaultValue={existingData.value} ref={valueInputRef} onChange={valueChangeHandler} />
                        {!formInputsValidity.value && <div className="invalid-feedback">
                            Please provide a valid value.
                        </div>}
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="question_id" className="col-sm-2 col-form-label">Question</label>
                    <div className="col-sm-10">
                        <select value={selectedQuestion} className={questionControlClasses} id="question_id" aria-label="Select Question" onChange={questionChangeHandler}>
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
                            <input className="form-check-input" type="checkbox" value="" id="selected" defaultChecked={existingData.selected} ref={selectedInputRef} />
                        </div>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-sm-2">&nbsp;</div>
                    <div className="col-sm-10">
                        <button onClick={finishEnteringHandler} className="btn btn-primary">Edit Multiple Choice</button>
                        <NavLink className="btn btn-secondary ms-2" to={"/admin/multichoices"}>Cancel</NavLink>
                    </div>
                </div>

            </form>
        </React.Fragment>
    );
}

export default EditMultipleChoiceForm;