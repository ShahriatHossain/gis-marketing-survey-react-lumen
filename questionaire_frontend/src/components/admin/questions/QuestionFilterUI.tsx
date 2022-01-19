import React, { useRef } from "react";
import { QuestionType } from "../../../utils/models/QuestionType";
import { Survey } from "../../../utils/models/Survey";

const QuestionFilterUI: React.FC<{ surveys: Survey[], questionTypes: QuestionType[], onFilterQuestions: Function }> = ({ surveys, questionTypes, onFilterQuestions }) => {
    const surveyInputRef = useRef<any>();
    const questionTypeInputRef = useRef<any>();

    const surveyFilterHandler = () => {
        const enteredSurvey = surveyInputRef.current.value;
        const enteredQuestionType = questionTypeInputRef.current.value;
        onFilterQuestions(+enteredSurvey, enteredQuestionType);
    }

    return (
        <React.Fragment>
            <div className="row">
                <div className="col-md-5">
                    <select className="form-select" aria-label="Filter by survey" ref={surveyInputRef}>
                        <option value="">Filter by survey</option>
                        {surveys && surveys.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
                    </select>
                </div>
                <div className="col-md-5">
                    <select className="form-select" aria-label="Filter by question type" ref={questionTypeInputRef}>
                        <option value="">Filter by question type</option>
                        {questionTypes && questionTypes.map(qt => <option key={qt.id} value={qt.name}>{qt.description}</option>)}
                    </select>
                </div>
                <div className="col">
                    <button type="button" className="btn btn-primary" title="Filter List" onClick={surveyFilterHandler}><i className="fas fa-bars"></i></button>
                </div>
            </div>
        </React.Fragment>
    )
}

export default QuestionFilterUI;