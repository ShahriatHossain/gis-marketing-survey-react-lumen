import { ContentContainer } from "../../../components/landing/content-container/ContentContainer";
import { ContentWrapper } from "../../../components/landing/content-wrapper/ContentWrapper";
import Footer from "../../../components/landing/footer/Footer";
import Home from "../../../components/landing/home/Home";

const HomePage: React.FC = () => {
    return (
        <ContentWrapper>
            <ContentContainer>
                <Home />
            </ContentContainer>
            <Footer />
        </ContentWrapper>
    );
};

export default HomePage;