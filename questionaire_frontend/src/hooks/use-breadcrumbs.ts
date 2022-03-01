import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { RouteModel } from "../utils/models/Common";

const useBreadCrumbs = (routes: RouteModel[]) => {
    const [currentBreadCrumb, setCurrentBreadCrumb] = useState<RouteModel | undefined>(<RouteModel>{});
    const location = useLocation();

    useEffect(() => {
        const breadCrumb = routes.find(r => location.pathname.includes(r.path));
        setCurrentBreadCrumb(breadCrumb);

        console.log(location);
    }, [location]);

    return currentBreadCrumb;
};

export default useBreadCrumbs;