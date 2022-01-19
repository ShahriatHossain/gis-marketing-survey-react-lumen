import React from "react";
import { Logo } from "./logo/Logo";
import { ProfileNav } from "./profile-nav/ProfileNav";
import { SearchForm } from "./search-form/SearchForm";
import { SidebarToggle } from "./sidebar-toggle/SidebarToggle";
import { TopNavContainer } from "./topnav-container/TopNavContainer";

export const TopNav: React.FC = () => {
    return (
        <TopNavContainer>
            <Logo></Logo>
            <SidebarToggle></SidebarToggle>
            <SearchForm></SearchForm>
            <ProfileNav></ProfileNav>
        </TopNavContainer>
    );
}