import { NavLink } from "react-router-dom";
import useBreadCrumbs from "../../hooks/use-breadcrumbs";
import { ROUTES } from "../../utils/constants/routes";

// map & render your breadcrumb components however you want.
const Breadcrumbs = () => {
    const currentRoute = useBreadCrumbs(ROUTES);

    return (
        <>
            <h1 className="mt-4">{currentRoute && currentRoute.breadcrumb}</h1>
            <ol className="breadcrumb mb-4">
                <li className="breadcrumb-item"><NavLink to="/">Dashboard</NavLink></li>
                {currentRoute && currentRoute.root && <li className="breadcrumb-item"><NavLink to={currentRoute.root}>{currentRoute.rootBreadcrumb}</NavLink></li>}
                {currentRoute && <li className="breadcrumb-item active">{currentRoute.breadcrumb}</li>}
            </ol>
        </>
    );
};

export default Breadcrumbs;
