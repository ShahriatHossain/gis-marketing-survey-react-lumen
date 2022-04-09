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
    
    return (
        <ContentWrapper>
            <SideNav></SideNav>
            <MainContent></MainContent>
        </ContentWrapper>
    );
};

export default Admin;