import { useContext } from "react";
import AuthContext from "../../../../../store/auth-context";
import { getStorageUserProfile } from "../../../../../utils/helpers/utility-functions";

export const SideNavFooter: React.FC = () => {
    const currentUser = getStorageUserProfile();
    
    return (
        <div className="sb-sidenav-footer">
            <div className="small">Logged in as:</div>
            {currentUser && currentUser.name}
        </div>
    );
}