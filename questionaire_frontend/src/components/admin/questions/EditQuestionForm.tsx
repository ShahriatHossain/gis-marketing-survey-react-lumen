import React, { useRef, useState } from "react";
import { NavLink, Prompt } from "react-router-dom";
import { QuestionType } from "../../../utils/models/QuestionType";
import { Survey } from "../../../utils/models/Survey";
import LoadingSpinner from "../../UI/LoadingSpinner";

const EditQuestionForm: React.FC<{ existingData: any, isLoading: boolean, surveys: Survey[], questionTypes: QuestionType[], onEditQuestion: Function }> = ({ existingData, isLoading, surveys, questionTypes, onEditQuestion }) => {
    const [isEntering, setIsEntering] = useState(false);

    const titleInputRef = useRef<any>();
    const surveyInputRef = useRef<any>();
    const requiredInputRef = useRef<any>();
    const questionTypeInputRef = useRef<any>();
    const descriptionInputRef = useRef<any>();

    const submitFormHandler = (event: any) => {
        event.preventDefault();

        const enteredTitle = titleInputRef.current.value;
        const enteredSurvey = surveyInputRef.current.value;
        const enteredQuestionType = questionTypeInputRef.current.value;
        const enteredRequired = requiredInputRef.current.checked;
        const enteredDescription = descriptionInputRef.current.value;

        onEditQuestion({
            id: existingData.id,
            title: enteredTitle,
            survey_id: +enteredSurvey,
            question_type: enteredQuestionType,
            required: +enteredRequired,
            description: enteredDescription
        });
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
                    <label htmlFor="title" className="col-sm-2 col-form-label">Title</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" defaultValue={existingData.title} id="title" ref={titleInputRef} />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="survey" className="col-sm-2 col-form-label">Survey</label>
                    <div className="col-sm-10">
                        <select className="form-select" id="survey" ref={surveyInputRef} aria-label="Select Survey">
                            {surveys && surveys.map(survey => <option key={survey.id} value={survey.id}>{survey.name}</option>)}
                        </select>
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="questionType" className="col-sm-2 col-form-label">Question Type</label>
                    <div className="col-sm-10">
                        <select className="form-select" id="questionType" ref={questionTypeInputRef} aria-label="Select Question Type">
                            {questionTypes && questionTypes.map(qt => <option key={qt.id} value={qt.name}>{qt.description}</option>)}
                        </select>
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="required" className="col-sm-2 col-form-label">Required?</label>
                    <div className="col-sm-10">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" defaultChecked={existingData.required} id="required" ref={requiredInputRef} />
                        </div>
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="description" className="col-sm-2 col-form-label">Description</label>
                    <div className="col-sm-10">
                        <textarea className="form-control" id="description" defaultValue={existingData.description} ref={descriptionInputRef}></textarea>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-sm-2">&nbsp;</div>
                    <div className="col-sm-10">
                        <button onClick={finishEnteringHandler} className="btn btn-primary">Edit Question</button>
                        <NavLink className="btn btn-secondary ms-2" to={"/questions"}>Cancel</NavLink>
                    </div>
                </div>
            </form>
        </React.Fragment>
    );
}

export default EditQuestionForm;