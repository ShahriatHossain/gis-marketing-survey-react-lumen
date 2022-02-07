import React from "react";
import { NavLink } from "react-router-dom";
import { QuestionType } from "../../../utils/models/QuestionType";
import QuestionTypeItem from "./QuestionTypeItem";

const QuestionTypeList: React.FC<{ questionTypes: QuestionType[], onRefreshRecord: Function }> = ({ questionTypes, onRefreshRecord }) => {

    const deleteQuestionTypeHandler = (questionTypeId: number) => {
        onRefreshRecord();
    }

    return (
        <React.Fragment>
            <div className="row">
                <div className="col">
                    <NavLink className="btn btn-primary btn-sm float-end mb-2" role="button" to={"/admin/new-question-type"}><i className="fas fa-plus"></i></NavLink>
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
                        {questionTypes.map(questionType => {
                            return (
                                <QuestionTypeItem onDeleteQuestionType={deleteQuestionTypeHandler} key={questionType.id} questionType={questionType} />
                            )
                        })}
                    </tbody>

                </table>
            </div>
        </React.Fragment>
    )
}

export default QuestionTypeList;