import { useContext } from "react";
import { Redirect, Route, RouteComponentProps, RouteProps } from "react-router-dom";
import AuthContext from "../../store/auth-context";

interface Props extends RouteProps {
    component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
}

const PrivateRoute = ({ component: Component, ...rest }: Props) => {
    const authCtx = useContext(AuthContext);
    return (
        <Route
            {...rest}
            render={(props) => authCtx.isLoggedIn ? <Component {...props} /> : <Redirect to='/' />}
        />
    )
};

export default PrivateRoute;