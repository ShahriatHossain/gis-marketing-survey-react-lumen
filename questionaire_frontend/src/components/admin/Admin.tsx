import { useContext, useEffect } from "react";
import useHttpWithParam from "../../hooks/use-httpWithParam";
import { getUserProfile } from "../../lib/user-api";
import AuthContext from "../../store/auth-context";
import { BASE_URL } from "../../utils/constants/common";
import { getAuthorizedHeader } from "../../utils/helpers/utility-functions";
import { ContentWrapper } from "./content-wrapper/ContentWrapper";
import { MainContent } from "./main-content/MainContent";
import { SideNav } from "./navigation/side-nav/SideNav";

const Admin: React.FC = () => {
    const authCtx = useContext(AuthContext);

    useEffect(() => {
        fetchUserProfile();
    }, []);

    const fetchUserProfile = async () => {
        let loadedUser = null;

        try {
            const response = await fetch(`${BASE_URL}/profile`, getAuthorizedHeader());
            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Could not fetch profile.');
            }

            loadedUser = {
                ...data,
            };

        } catch (err: any) {
            throw new Error(err.message || 'Could not fetch user.');
        }

        authCtx.setProfile(loadedUser);
    }

    return (
        <ContentWrapper>
            <SideNav></SideNav>
            <MainContent></MainContent>
        </ContentWrapper>
    );
};

export default Admin;