import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { ContentContainer } from "../../../components/landing/content-container/ContentContainer";
import { ContentWrapper } from "../../../components/landing/content-wrapper/ContentWrapper";
import Footer from "../../../components/landing/footer/Footer";
import SignupForm from "../../../components/landing/signup/SignupForm";
import useHttpWithParam from "../../../hooks/use-httpWithParam";
import { registerUser } from "../../../lib/auth-api";

const Signup: React.FC = () => {
    const { sendRequest, status, response, error } = useHttpWithParam(registerUser);
    const history = useHistory();

    useEffect(() => {
        if (status === 'completed' && !error) {
            history.push('/signin');
        }
    }, [status, history]);

    const registerUserHandler = (userData: any) => {
        sendRequest(userData);
    };

    return (
        <ContentWrapper>
            <ContentContainer>
                <SignupForm isLoading={status === 'pending'} error={error} onAddCustomer={registerUserHandler} />
            </ContentContainer>
            <Footer />
        </ContentWrapper>
    );
};

export default Signup;