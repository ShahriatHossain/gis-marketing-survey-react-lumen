import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { usePaginatedData } from "../../../hooks/use-paginatedData";
import { PageSize } from "../../../utils/constants/common";
import { MultipleChoice } from "../../../utils/models/MultipleChoice";
import Pagination from "../../UI/Pagination";
import MultipleChoiceItem from "./MultipleChoiceItem";

const MultipleChoiceList: React.FC<{ multichoices: MultipleChoice[], onRefreshRecord: Function }> = ({ multichoices, onRefreshRecord }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const paginatedData = usePaginatedData(currentPage, multichoices);

    const deleteMultipleChoiceHandler = (multichoiceId: number) => {
        onRefreshRecord();
    }

    return (
        <React.Fragment>
            <div className="row">
                <div className="col">
                    <NavLink className="btn btn-primary btn-sm float-end mb-2" role="button" to={"/admin/new-multichoice"}><i className="fas fa-plus"></i></NavLink>
                </div>
            </div>
            <div className="table-responsive">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">Label</th>
                            <th scope="col">Value</th>
                            <th scope="col">Question Title</th>
                            <th scope="col">Selected</th>
                            <th scope="col">Created At</th>
                            <th scope="col">Updated At</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {paginatedData.map(multichoice => {
                            return (
                                <MultipleChoiceItem onDeleteMultipleChoice={deleteMultipleChoiceHandler} key={multichoice.id} multichoice={multichoice} />
                            )
                        })}
                    </tbody>

                </table>
                <Pagination
                    currentPage={currentPage}
                    totalCount={multichoices.length}
                    pageSize={PageSize}
                    onPageChange={(page: number) => setCurrentPage(page)} />
            </div>
        </React.Fragment>
    )
}

export default MultipleChoiceList;