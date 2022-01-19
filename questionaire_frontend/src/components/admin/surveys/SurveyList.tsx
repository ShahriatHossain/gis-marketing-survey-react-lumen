import React from "react";
import { NavLink } from "react-router-dom";
import { Survey } from "../../../utils/models/Survey";
import SurveyItem from "./SurveyItem";

const SurveyList: React.FC<{ surveys: Survey[], onRefreshRecord: Function }> = ({ surveys, onRefreshRecord }) => {

    const deleteSurveyHandler = (surveyId: number) => {
        onRefreshRecord();
    }

    return (
        <React.Fragment>
            <div className="row">
                <div className="col">
                    <NavLink className="btn btn-primary btn-sm float-end mb-2" role="button" to={"/new-survey"}><i className="fas fa-plus"></i></NavLink>
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
                        {surveys.map(survey => {
                            return (
                                <SurveyItem onDeleteSurvey={deleteSurveyHandler} key={survey.id} survey={survey} />
                            )
                        })}
                    </tbody>

                </table>
            </div>
        </React.Fragment>
    )
}

export default SurveyList;