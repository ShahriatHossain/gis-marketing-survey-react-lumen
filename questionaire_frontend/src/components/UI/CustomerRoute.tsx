import { useContext } from "react";
import { Redirect, Route, RouteComponentProps, RouteProps } from "react-router-dom";
import AuthContext from "../../store/auth-context";
import { getStorageUserProfile, getUserProfile } from "../../utils/helpers/utility-functions";

interface Props extends RouteProps {
    component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
}

const CustomerRoute = ({ component: Component, ...rest }: Props) => {
    const authCtx = useContext(AuthContext);
    let currentUser = getUserProfile(authCtx.profile);

    if (!currentUser) {
        currentUser = getStorageUserProfile();
    }
    return (
        <Route
            {...rest}
            render={(props) => (authCtx.isLoggedIn
                && (currentUser && currentUser.role_id === 2)) ? <Component {...props} /> : <Redirect to='/' />}
        />
    )
};

export default CustomerRoute;