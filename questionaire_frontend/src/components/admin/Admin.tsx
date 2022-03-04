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