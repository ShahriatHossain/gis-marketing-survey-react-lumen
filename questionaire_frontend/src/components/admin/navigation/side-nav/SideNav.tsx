import { SideNavContainer } from "./sidenav-container/SideNavContainer"
import { SideNavFooter } from "./sidenav-footer/SideNavFooter";
import { SideNavMenuContainer } from "./sidenav-menu-container/SideNavMenuContainer";

export const SideNav: React.FC = () => {
    return (
        <div id="layoutSidenav_nav">
            <SideNavContainer>
                <SideNavMenuContainer></SideNavMenuContainer>
                <SideNavFooter></SideNavFooter>
            </SideNavContainer>
        </div>
    );
}