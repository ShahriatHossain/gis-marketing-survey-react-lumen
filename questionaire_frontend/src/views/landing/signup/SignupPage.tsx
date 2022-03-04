import { ContentContainer } from "../../../components/landing/content-container/ContentContainer";
import { ContentWrapper } from "../../../components/landing/content-wrapper/ContentWrapper";
import Footer from "../../../components/landing/footer/Footer";
import SignUp from "../../../components/landing/signup/SignUp";

const SignupPage: React.FC = () => {
    return (
        <ContentWrapper>
            <ContentContainer>
                <SignUp />
            </ContentContainer>
            <Footer />
        </ContentWrapper>
    );
};

export default SignupPage;