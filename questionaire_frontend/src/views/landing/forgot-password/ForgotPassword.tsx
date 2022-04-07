import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { ContentContainer } from "../../../components/landing/content-container/ContentContainer";
import { ContentWrapper } from "../../../components/landing/content-wrapper/ContentWrapper";
import Footer from "../../../components/landing/footer/Footer";
import ForgotPasswordForm from "../../../components/landing/forgot-password/ForgotPasswordForm";
import useHttpWithParam from "../../../hooks/use-httpWithParam";
import { forgotPassword } from "../../../lib/auth-api";

const ForgotPassword: React.FC = () => {
    const { sendRequest, status, response, error } = useHttpWithParam(forgotPassword);
    const history = useHistory();

    const requestPasswordReset = (userData: any) => {
        sendRequest(userData);
    };

    console.log(response);

    return (
        <ContentWrapper>
            <ContentContainer>
                <ForgotPasswordForm isLoading={status === 'pending'} onRequestPasswordReset={requestPasswordReset} />
            </ContentContainer>
            <Footer />
        </ContentWrapper>
    );
};

export default ForgotPassword;