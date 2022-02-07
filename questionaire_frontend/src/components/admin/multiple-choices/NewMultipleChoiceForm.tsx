import React, { useRef, useState } from "react";
import { NavLink, Prompt } from "react-router-dom";
import { Question } from "../../../utils/models/Question";
import LoadingSpinner from "../../UI/LoadingSpinner";

const NewMultipleChoiceForm: React.FC<{ isLoading: boolean, questions: Question[], onAddMultipleChoice: Function }> = ({ isLoading, questions, onAddMultipleChoice }) => {
    const [isEntering, setIsEntering] = useState(false);

    const labelInputRef = useRef<any>();
    const valueInputRef = useRef<any>();
    const selectedInputRef = useRef<any>();
    const questionInputRef = useRef<any>();

    const submitFormHandler = (event: any) => {
        event.preventDefault();

        const enteredLabel = labelInputRef.current.value;
        const enteredValue = valueInputRef.current.value;
        const enteredSelected = selectedInputRef.current.checked;
        const enteredQuestion = questionInputRef.current.value;

        // optional: Could validate here

        onAddMultipleChoice({ label: enteredLabel, value: enteredValue, selected: enteredSelected, question_id: enteredQuestion });
    }

    const finishEnteringHandler = () => {
        setIsEntering(false);
    };

    const formFocusedHandler = () => {
        setIsEntering(true);
    };

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
                        <input type="text" className="form-control" id="label" ref={labelInputRef} required />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="value" className="col-sm-2 col-form-label">Value</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="value" ref={valueInputRef} required />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="question_id" className="col-sm-2 col-form-label">Question</label>
                    <div className="col-sm-10">
                        <select className="form-select" id="question_id" ref={questionInputRef} aria-label="Select Question" required>
                            <option value="">Choose...</option>
                            {questions && questions.map(question => <option key={question.id} value={question.id}>{question.title}</option>)}
                        </select>
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
                        <button onClick={finishEnteringHandler} className="btn btn-primary">Add Multiple Choice</button>
                        <NavLink className="btn btn-secondary ms-2" to={"/admin/multichoices"}>Cancel</NavLink>
                    </div>
                </div>

            </form>
        </React.Fragment>
    );
}

export default NewMultipleChoiceForm;