import { ContentContainer } from "../../../components/landing/content-container/ContentContainer";
import { ContentWrapper } from "../../../components/landing/content-wrapper/ContentWrapper";
import SignIn from "../../../components/landing/signin/SignIn";
import Footer from "../../../components/landing/footer/Footer";

const SigninPage: React.FC = () => {
    return (
        <ContentWrapper>
            <ContentContainer>
                <SignIn />
            </ContentContainer>
            <Footer />
        </ContentWrapper>
    );
};

export default SigninPage;