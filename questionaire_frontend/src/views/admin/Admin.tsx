import { ContentWrapper } from "../../components/admin/content-wrapper/ContentWrapper";
import { MainContent } from "../../components/admin/main-content/MainContent";
import { SideNav } from "../../components/admin/navigation/side-nav/SideNav";

const Admin: React.FC = () => {
    
    return (
        <ContentWrapper>
            <SideNav></SideNav>
            <MainContent></MainContent>
        </ContentWrapper>
    );
};

export default Admin;