import { useContext } from "react";
import { Redirect, Route, RouteComponentProps, RouteProps } from "react-router-dom";
import AuthContext from "../../store/auth-context";
import { getUserProfile } from "../../utils/helpers/utility-functions";

interface Props extends RouteProps {
    component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
}

const AdminRoute = ({ component: Component, ...rest }: Props) => {
    const authCtx = useContext(AuthContext);
    const currentUser = getUserProfile(authCtx.profile);
    return (
        <Route
            {...rest}
            render={(props) => (authCtx.isLoggedIn
                && (currentUser && currentUser.role_id == 1)) ? <Component {...props} /> : <Redirect to='/' />}
        />
    )
};

export default AdminRoute;