import React, { useRef, useState } from "react";
import { QuestionType } from "../../../utils/models/QuestionType";
import { Survey } from "../../../utils/models/Survey";

interface Props {
    surveys: Survey[],
    questionTypes: QuestionType[],
    selecFilterSurvey: string,
    selectFilterQuestionType: string,
    onFilterQuestions: Function,
    onSelectFilterSurvey: Function,
    onSelectFilterQuestionType: Function
}

const QuestionFilterUI: React.FC<Props> = (props: Props) => {

    const surveyChangeHandler = (event: any) => {
        props.onSelectFilterSurvey(event.target.value);
    }

    const questionTypeChangeHandler = (event: any) => {
        props.onSelectFilterQuestionType(event.target.value);
    }

    const surveyFilterHandler = () => {
        props.onFilterQuestions(props.selecFilterSurvey, props.selectFilterQuestionType);
    }

    return (
        <React.Fragment>
            <div className="row">
                <div className="col-md-5">
                    <select className="form-select" value={props.selecFilterSurvey} aria-label="Filter by survey" onChange={surveyChangeHandler}>
                        <option value="">Filter by survey</option>
                        {props.surveys && props.surveys.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
                    </select>
                </div>
                <div className="col-md-5">
                    <select className="form-select" value={props.selectFilterQuestionType} aria-label="Filter by question type" onChange={questionTypeChangeHandler}>
                        <option value="">Filter by question type</option>
                        {props.questionTypes && props.questionTypes.map(qt => <option key={qt.id} value={qt.name}>{qt.description}</option>)}
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