import React, { useMemo, useState } from "react";
import { NavLink } from "react-router-dom";
import { PageSize } from "../../../utils/constants/common";
import { Survey } from "../../../utils/models/Survey";
import Pagination from "../../UI/Pagination";
import SurveyItem from "./SurveyItem";

const SurveyList: React.FC<{ surveys: Survey[], onRefreshRecord: Function }> = ({ surveys, onRefreshRecord }) => {
    const [currentPage, setCurrentPage] = useState(1);

    const deleteSurveyHandler = (surveyId: number) => {
        onRefreshRecord();
    }

    const paginatedData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return surveys.slice(firstPageIndex, lastPageIndex);
    }, [currentPage]);

    return (
        <React.Fragment>
            <div className="row">
                <div className="col">
                    <NavLink className="btn btn-primary btn-sm float-end mb-2" role="button" to={"/admin/new-survey"}><i className="fas fa-plus"></i></NavLink>
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
                        {paginatedData.map(survey => {
                            return (
                                <SurveyItem onDeleteSurvey={deleteSurveyHandler} key={survey.id} survey={survey} />
                            )
                        })}
                    </tbody>

                </table>
                <Pagination
                    currentPage={currentPage}
                    totalCount={surveys.length}
                    pageSize={PageSize}
                    onPageChange={(page: number) => setCurrentPage(page)} />
            </div>
        </React.Fragment>
    )
}

export default SurveyList;