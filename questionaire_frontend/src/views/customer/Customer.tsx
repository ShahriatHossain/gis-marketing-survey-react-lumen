import { ContentWrapper } from "../../components/customer/content-wrapper/ContentWrapper";
import { MainContent } from "../../components/customer/main-content/MainContent";
import { SideNav } from "../../components/customer/navigation/side-nav/SideNav";


const Customer:React.FC = ()=> {
    return(
        <ContentWrapper>
            <SideNav></SideNav>
            <MainContent></MainContent>
        </ContentWrapper>
    )
}

export default Customer;