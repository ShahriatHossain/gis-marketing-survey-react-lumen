import React, { useContext } from "react";
import AuthContext from "../../../../store/auth-context";
import { Logo } from "./logo/Logo";
import { ProfileNav } from "./profile-nav/ProfileNav";
import { SearchForm } from "./search-form/SearchForm";
import { SidebarToggle } from "./sidebar-toggle/SidebarToggle";
import { TopNavContainer } from "./topnav-container/TopNavContainer";

export const TopNav: React.FC = () => {
    const authCtx = useContext(AuthContext);
    return (
        <TopNavContainer>
            <Logo></Logo>
            {authCtx.isLoggedIn ?
                <SidebarToggle></SidebarToggle>
                : ''}
            <SearchForm></SearchForm>
            <ProfileNav></ProfileNav>
        </TopNavContainer>
    );
}