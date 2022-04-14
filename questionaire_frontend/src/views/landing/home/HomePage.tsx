import { useEffect } from "react";
import { ContentContainer } from "../../../components/landing/content-container/ContentContainer";
import { ContentWrapper } from "../../../components/landing/content-wrapper/ContentWrapper";
import Footer from "../../../components/landing/footer/Footer";
import Home from "../../../components/landing/home/Home";
import useHttpWithParam from "../../../hooks/use-httpWithParam";
import { getSurveysWithRelatedData } from "../../../lib/survey-api";
import QuestionnaireContextProvider from "../../../store/questionnaire-context";

const HomePage: React.FC = () => {
    const { sendRequest, status, data: loadedSurveys, error } = useHttpWithParam(
        getSurveysWithRelatedData,
        true
    );

    useEffect(() => {
        sendRequest();
    }, [sendRequest]);
    
    return (
        <QuestionnaireContextProvider>
            <ContentWrapper>
                <ContentContainer>
                    <Home surveys={loadedSurveys} />
                </ContentContainer>
                <Footer />
            </ContentWrapper>
        </QuestionnaireContextProvider>

    );
};

export default HomePage;