import { ContentContainer } from "../../../components/landing/content-container/ContentContainer";
import { ContentWrapper } from "../../../components/landing/content-wrapper/ContentWrapper";
import Footer from "../../../components/landing/footer/Footer";
import Home from "../../../components/landing/home/Home";
import QuestionnaireContextProvider from "../../../store/questionnaire-context";

const HomePage: React.FC = () => {
    return (
        <QuestionnaireContextProvider>
            <ContentWrapper>
                <ContentContainer>
                    <Home />
                </ContentContainer>
                <Footer />
            </ContentWrapper>
        </QuestionnaireContextProvider>

    );
};

export default HomePage;