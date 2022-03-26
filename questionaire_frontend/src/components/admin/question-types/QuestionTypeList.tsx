import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { usePaginatedData } from "../../../hooks/use-paginatedData";
import { PageSize } from "../../../utils/constants/common";
import { QuestionType } from "../../../utils/models/QuestionType";
import Pagination from "../../UI/Pagination";
import QuestionTypeItem from "./QuestionTypeItem";

const QuestionTypeList: React.FC<{ questionTypes: QuestionType[], onRefreshRecord: Function }> = ({ questionTypes, onRefreshRecord }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const paginatedData = usePaginatedData(currentPage, questionTypes);
    
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
                        {paginatedData.map(questionType => {
                            return (
                                <QuestionTypeItem onDeleteQuestionType={deleteQuestionTypeHandler} key={questionType.id} questionType={questionType} />
                            )
                        })}
                    </tbody>

                </table>
                <Pagination
                    currentPage={currentPage}
                    totalCount={questionTypes.length}
                    pageSize={PageSize}
                    onPageChange={(page: number) => setCurrentPage(page)} />
            </div>
        </React.Fragment>
    )
}

export default QuestionTypeList;