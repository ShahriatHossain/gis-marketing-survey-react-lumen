import React, { useEffect, useRef, useState } from "react";
import { NavLink, Prompt } from "react-router-dom";
import { isEmpty } from "../../../utils/helpers/utility-functions";
import { QuestionType } from "../../../utils/models/QuestionType";
import { Survey } from "../../../utils/models/Survey";
import LoadingSpinner from "../../UI/LoadingSpinner";
import SubmitButton from "../../UI/SubmitButton";

const EditQuestionForm: React.FC<{ existingData: any, isLoading: boolean, surveys: Survey[], questionTypes: QuestionType[], onEditQuestion: Function }> = ({ existingData, isLoading, surveys, questionTypes, onEditQuestion }) => {
    const [isEntering, setIsEntering] = useState(false);
    const [selectedSurvey, setSelectedSurvey] = useState("");
    const [selectedQuestionType, setSelectedQuestionType] = useState("");
    const [formInputsValidity, setFormInputsValidity] = useState({
        title: true,
        survey: true,
        questionType: true
    });

    const titleInputRef = useRef<any>();
    const requiredInputRef = useRef<any>();
    const descriptionInputRef = useRef<any>();

    useEffect(() => {
        setSelectedSurvey(existingData.survey_id);
        setSelectedQuestionType(existingData.question_type);
    }, []);

    const titleChangeHandler = (event: any) => {
        setFormInputsValidity(prevState => {
            return {
                ...prevState,
                title: !isEmpty(event.target.value)
            }
        });
    }

    const surveyChangeHandler = (event: any) => {
        setSelectedSurvey(event.target.value);
        setFormInputsValidity(prevState => {
            return {
                ...prevState,
                survey: !isEmpty(event.target.value)
            }
        });
    }

    const questionTypeChangeHandler = (event: any) => {
        setSelectedQuestionType(event.target.value);
        setFormInputsValidity(prevState => {
            return {
                ...prevState,
                questionType: !isEmpty(event.target.value)
            }
        });
    }

    const submitFormHandler = (event: any) => {
        event.preventDefault();

        const enteredTitle = titleInputRef.current.value;
        const enteredSurvey = selectedSurvey;
        const enteredQuestionType = selectedQuestionType;
        const enteredRequired = requiredInputRef.current.checked;
        const enteredDescription = descriptionInputRef.current.value;

        // optional: Could validate here
        const enteredTitleIsValid = !isEmpty(enteredTitle);
        let enteredSurveyIsValid = true;
        if (typeof enteredSurvey == 'string') {
            enteredSurveyIsValid = !isEmpty(enteredSurvey);
        }
        const enteredQuestionTypeIsValid = !isEmpty(enteredQuestionType);

        setFormInputsValidity({
            title: enteredTitleIsValid,
            survey: enteredSurveyIsValid,
            questionType: enteredQuestionTypeIsValid
        });

        const formIsValid = enteredTitleIsValid && enteredSurveyIsValid && enteredQuestionTypeIsValid;

        if (!formIsValid) {
            return;
        }

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

    const titleControlClasses = `form-control ${formInputsValidity.title ? '' : 'is-invalid'}`;
    const surveyControlClasses = `form-select ${formInputsValidity.survey ? '' : 'is-invalid'}`;
    const questionTypeControlClasses = `form-select ${formInputsValidity.questionType ? '' : 'is-invalid'}`;

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
                    <label htmlFor="title" className="col-sm-2 col-form-label">Title</label>
                    <div className="col-sm-10">
                        <input type="text" className={titleControlClasses} defaultValue={existingData.title} id="title" ref={titleInputRef} onChange={titleChangeHandler} />
                        {!formInputsValidity.title && <div className="invalid-feedback">
                            Please provide a valid title.
                        </div>}
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="survey" className="col-sm-2 col-form-label">Survey</label>
                    <div className="col-sm-10">
                        <select className={surveyControlClasses} value={selectedSurvey} id="survey" aria-label="Select Survey" onChange={surveyChangeHandler} >
                            <option value="">Choose...</option>
                            {surveys && surveys.map(survey => <option key={survey.id} value={survey.id}>{survey.name}</option>)}
                        </select>
                        {!formInputsValidity.survey && <div className="invalid-feedback">
                            Please choose a survey.
                        </div>}
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="questionType" className="col-sm-2 col-form-label">Question Type</label>
                    <div className="col-sm-10">
                        <select className={questionTypeControlClasses} value={selectedQuestionType} id="questionType" aria-label="Select Question Type" onChange={questionTypeChangeHandler} >
                            <option value="">Choose...</option>
                            {questionTypes && questionTypes.map(qt => <option key={qt.id} value={qt.name}>{qt.description}</option>)}
                        </select>
                        {!formInputsValidity.questionType && <div className="invalid-feedback">
                            Please choose a question type.
                        </div>}
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
                        <SubmitButton isLoading={isLoading}
                            clickHandler={finishEnteringHandler}
                            classes="btn btn-primary btn-sm">Edit Question</SubmitButton>
                        <NavLink className="btn btn-secondary btn-sm ms-2" to={"/admin/questions"}>Cancel</NavLink>
                    </div>
                </div>
            </form>
        </React.Fragment>
    );
}

export default EditQuestionForm;