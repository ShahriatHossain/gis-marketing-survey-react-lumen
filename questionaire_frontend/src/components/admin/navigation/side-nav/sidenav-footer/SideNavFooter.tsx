import { useContext } from "react";
import AuthContext from "../../../../../store/auth-context";
import { getUserProfile } from "../../../../../utils/helpers/utility-functions";

export const SideNavFooter: React.FC = () => {
    const authCtx = useContext(AuthContext);
    const currentUser = getUserProfile(authCtx.profile);
    
    return (
        <div className="sb-sidenav-footer">
            <div className="small">Logged in as:</div>
            {currentUser && currentUser.name}
        </div>
    );
}