import React from "react";
import { NavLink } from "react-router-dom";
import { Question } from "../../../utils/models/Question";
import { QuestionType } from "../../../utils/models/QuestionType";
import { Survey } from "../../../utils/models/Survey";
import QuestionFilterUI from "./QuestionFilterUI";
import QuestionItem from "./QuestionItem";

const QuestionList: React.FC<{ questions: Question[], surveys: Survey[], questionTypes: QuestionType[], onRefreshRecord: Function, onFilterQuestions: Function }> = ({ questions, surveys, questionTypes, onRefreshRecord, onFilterQuestions }) => {

    const deleteQuestionHandler = (questionId: number) => {
        onRefreshRecord(questionId);
    }

    return (
        <React.Fragment>
            <div className="row mb-2">
                <div className="col">
                    <QuestionFilterUI surveys={surveys} questionTypes={questionTypes} onFilterQuestions={onFilterQuestions}></QuestionFilterUI>
                </div>
                <div className="col">
                    <NavLink className="btn btn-primary btn-sm float-end" role="button" to={"/new-question"}><i className="fas fa-plus"></i></NavLink>
                </div>
            </div>
            <div className="table-responsive">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Description</th>
                            <th scope="col">Created At</th>
                            <th scope="col">Updated At</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {questions.map(question => {
                            return (
                                <QuestionItem onDeleteQuestion={deleteQuestionHandler} key={question.id} question={question} />
                            )
                        })}
                    </tbody>

                </table>
            </div>
        </React.Fragment>
    )
}

export default QuestionList;