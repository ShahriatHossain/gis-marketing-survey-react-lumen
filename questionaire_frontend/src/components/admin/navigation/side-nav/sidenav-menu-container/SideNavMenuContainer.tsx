import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import AuthContext from "../../../../../store/auth-context";
import { BusinessTypeLinks, MultipleChoiceLinks, QuestionLinks, QuestionTypeLinks, SurveyLinks, UserLinks } from "../../../../../utils/constants/SideNavLinks";
import { SideNavItemId } from "../../../../../utils/enums";
import { getStorageUserProfile } from "../../../../../utils/helpers/utility-functions";
import SideNavItem from "../side-nav-item/SideNavItem";

export const SideNavMenuContainer: React.FC = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [collapsedId, setCollapsedId] = useState('');
    const currentUser = getStorageUserProfile();

    const navItemClickHandler = (id: string, openFlag: boolean) => {
        setCollapsedId(id);
        setIsCollapsed(openFlag);
    };
    return (
        <div className="sb-sidenav-menu">
            <div className="nav">
                <NavLink className="nav-link" to={`/${currentUser.role_id === 1 ? 'admin' : 'customer'}/dashboard`}>
                    <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                    Dashboard
                </NavLink>

                {/* User */}
                <SideNavItem id={SideNavItemId.CollapseUser} name="User" links={UserLinks}
                    isCollapsed={collapsedId == SideNavItemId.CollapseUser ? isCollapsed : true}
                    onItemClick={navItemClickHandler}></SideNavItem>

                {/* Survey */}
                <SideNavItem id={SideNavItemId.CollapseSurvey} name="Survey" links={SurveyLinks}
                    isCollapsed={collapsedId == SideNavItemId.CollapseSurvey ? isCollapsed : true}
                    onItemClick={navItemClickHandler}></SideNavItem>

                {/* Question */}
                <SideNavItem id={SideNavItemId.CollapseQuestion} name="Question" links={QuestionLinks}
                    isCollapsed={collapsedId == SideNavItemId.CollapseQuestion ? isCollapsed : true}
                    onItemClick={navItemClickHandler}></SideNavItem>

                {/* Multiple Choice */}
                <SideNavItem id={SideNavItemId.CollapseMultipleChoice} name="Multiple Choice" links={MultipleChoiceLinks}
                    isCollapsed={collapsedId == SideNavItemId.CollapseMultipleChoice ? isCollapsed : true}
                    onItemClick={navItemClickHandler}></SideNavItem>

                {/* Business Type */}
                <SideNavItem id={SideNavItemId.CollapseBusinessType} name="Business Type" links={BusinessTypeLinks}
                    isCollapsed={collapsedId == SideNavItemId.CollapseBusinessType ? isCollapsed : true}
                    onItemClick={navItemClickHandler}></SideNavItem>

                {/* Question Type */}
                <SideNavItem id={SideNavItemId.CollapseQuestionType} name="Question Type" links={QuestionTypeLinks}
                    isCollapsed={collapsedId == SideNavItemId.CollapseQuestionType ? isCollapsed : true}
                    onItemClick={navItemClickHandler}></SideNavItem>
            </div>
        </div>
    );
}