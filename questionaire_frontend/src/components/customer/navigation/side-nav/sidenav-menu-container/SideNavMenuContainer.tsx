import { useState } from "react";
import { NavLink } from "react-router-dom";
import { getStorageUserProfile } from "../../../../../utils/helpers/utility-functions";

export const SideNavMenuContainer: React.FC = () => {
    const currentUser = getStorageUserProfile();
    return (
        <div className="sb-sidenav-menu">
            <div className="nav">
                <NavLink className="nav-link" to={`/${currentUser.role_id === 1 ? 'admin' : 'customer'}/dashboard`}>
                    <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                    Dashboard
                </NavLink>
            </div>
        </div>
    );
}