import React from "react";
import { NavLink } from "react-router-dom";
import { BusinessType } from "../../../utils/models/BusinessType";
import BusinessTypeItem from "./BusinessTypeItem";

const BusinessTypeList: React.FC<{ businessTypes: BusinessType[], onRefreshRecord: Function }> = ({ businessTypes, onRefreshRecord }) => {

    const deleteBusinessTypeHandler = (businessTypeId: number) => {
        onRefreshRecord();
    }

    return (
        <React.Fragment>
            <div className="row">
                <div className="col">
                    <NavLink className="btn btn-primary btn-sm float-end mb-2" role="button" to={"/admin/new-business-type"}><i className="fas fa-plus"></i></NavLink>
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
                        {businessTypes.map(businessType => {
                            return (
                                <BusinessTypeItem onDeleteBusinessType={deleteBusinessTypeHandler} key={businessType.id} businessType={businessType} />
                            )
                        })}
                    </tbody>

                </table>
            </div>
        </React.Fragment>
    )
}

export default BusinessTypeList;