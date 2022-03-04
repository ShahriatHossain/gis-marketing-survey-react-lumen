import { ContentContainer } from "../../../components/landing/content-container/ContentContainer";
import { ContentWrapper } from "../../../components/landing/content-wrapper/ContentWrapper";
import Footer from "../../../components/landing/footer/Footer";
import ForgotPassword from "../../../components/landing/forgot-password/ForgotPassword";

const ForgotPasswordPage: React.FC = () => {
    return (
        <ContentWrapper>
            <ContentContainer>
                <ForgotPassword />
            </ContentContainer>
            <Footer />
        </ContentWrapper>
    );
};

export default ForgotPasswordPage;