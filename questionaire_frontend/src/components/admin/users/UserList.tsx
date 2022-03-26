import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { usePaginatedData } from "../../../hooks/use-paginatedData";
import { PageSize } from "../../../utils/constants/common";
import { User } from "../../../utils/models/User";
import Pagination from "../../UI/Pagination";
import UserItem from "./UserItem";

import './Users.css';

const UserList: React.FC<{ users: User[], onRefreshRecord: Function }> = ({ users, onRefreshRecord }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const paginatedData = usePaginatedData(currentPage, users);

    const deleteUserHandler = (userId: number) => {
        onRefreshRecord();
    }

    return (
        <React.Fragment>
            <div className="row">
                <div className="col">
                    <NavLink className="btn btn-primary btn-sm float-end mb-2" role="button" to={"/admin/new-user"}><i className="fas fa-plus"></i></NavLink>
                </div>
            </div>
            <div className="table-responsive">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th className={"valign-top"} scope="col">Name</th>
                            <th className="valign-top" scope="col">Email</th>
                            <th className="valign-top" scope="col">Created At</th>
                            <th className="valign-top" scope="col">Updated At</th>
                            <th className="valign-top" scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {paginatedData.map(user => {
                            return (
                                <UserItem onDeleteUser={deleteUserHandler} key={user.id} user={user} />
                            )
                        })}
                    </tbody>

                </table>
                <Pagination
                    currentPage={currentPage}
                    totalCount={users.length}
                    pageSize={PageSize}
                    onPageChange={(page: number) => setCurrentPage(page)} />
            </div>
        </React.Fragment>
    )
}

export default UserList;