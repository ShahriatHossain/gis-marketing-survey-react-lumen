import React from "react";
import { NavLink } from "react-router-dom";
import { Question } from "../../../utils/models/Question";
import { QuestionType } from "../../../utils/models/QuestionType";
import { Survey } from "../../../utils/models/Survey";
import QuestionFilterUI from "./QuestionFilterUI";
import QuestionItem from "./QuestionItem";

const QuestionList: React.FC<{ questions: Question[], onRefreshRecord: Function }> = ({ questions, onRefreshRecord }) => {

    const deleteQuestionHandler = (questionId: number) => {
        onRefreshRecord(questionId);
    }

    return (
        <React.Fragment>
            <div className="table-responsive">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">Title</th>
                            <th scope="col">Survey</th>
                            <th scope="col">Question Type</th>
                            <th scope="col">Required</th>
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