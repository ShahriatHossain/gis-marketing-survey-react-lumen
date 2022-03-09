import { ContentContainer } from "../../../components/landing/content-container/ContentContainer";
import { ContentWrapper } from "../../../components/landing/content-wrapper/ContentWrapper";
import Footer from "../../../components/landing/footer/Footer";
import ForgotPasswordForm from "../../../components/landing/forgot-password/ForgotPasswordForm";

const ForgotPassword: React.FC = () => {
    return (
        <ContentWrapper>
            <ContentContainer>
                <ForgotPasswordForm />
            </ContentContainer>
            <Footer />
        </ContentWrapper>
    );
};

export default ForgotPassword;