import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { usePaginatedData } from "../../../hooks/use-paginatedData";
import { PageSize } from "../../../utils/constants/common";
import { Question } from "../../../utils/models/Question";
import { QuestionType } from "../../../utils/models/QuestionType";
import { Survey } from "../../../utils/models/Survey";
import Pagination from "../../UI/Pagination";
import QuestionFilterUI from "./QuestionFilterUI";
import QuestionItem from "./QuestionItem";

const QuestionList: React.FC<{ questions: Question[], onRefreshRecord: Function }> = ({ questions, onRefreshRecord }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const paginatedData = usePaginatedData(currentPage, questions);

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
                        {paginatedData.map(question => {
                            return (
                                <QuestionItem onDeleteQuestion={deleteQuestionHandler} key={question.id} question={question} />
                            )
                        })}
                    </tbody>

                </table>
                <Pagination
                    currentPage={currentPage}
                    totalCount={questions.length}
                    pageSize={PageSize}
                    onPageChange={(page: number) => setCurrentPage(page)} />
            </div>
        </React.Fragment>
    )
}

export default QuestionList;