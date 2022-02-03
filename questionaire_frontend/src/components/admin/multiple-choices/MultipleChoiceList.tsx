import React from "react";
import { NavLink } from "react-router-dom";
import { MultipleChoice } from "../../../utils/models/MultipleChoice";
import MultipleChoiceItem from "./MultipleChoiceItem";

const MultipleChoiceList: React.FC<{ multichoices: MultipleChoice[], onRefreshRecord: Function }> = ({ multichoices, onRefreshRecord }) => {

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
                        {multichoices.map(multichoice => {
                            return (
                                <MultipleChoiceItem onDeleteMultipleChoice={deleteMultipleChoiceHandler} key={multichoice.id} multichoice={multichoice} />
                            )
                        })}
                    </tbody>

                </table>
            </div>
        </React.Fragment>
    )
}

export default MultipleChoiceList;