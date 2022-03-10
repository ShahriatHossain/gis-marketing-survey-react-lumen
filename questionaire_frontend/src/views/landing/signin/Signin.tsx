import { ContentContainer } from "../../../components/landing/content-container/ContentContainer";
import { ContentWrapper } from "../../../components/landing/content-wrapper/ContentWrapper";
import SigninForm from "../../../components/landing/signin/SigninForm";
import Footer from "../../../components/landing/footer/Footer";
import useHttpWithParam from "../../../hooks/use-httpWithParam";
import { useHistory } from "react-router-dom";
import { useContext, useEffect } from "react";
import { loginUser } from "../../../lib/auth-api";
import AuthContext from "../../../store/auth-context";

const Signin: React.FC = () => {
    const { sendRequest, status, data: loadTokenInfo, error } = useHttpWithParam(loginUser);
    const history = useHistory();
    const authCtx = useContext(AuthContext);

    useEffect(() => {
        if (status === 'completed') {
            history.push('/admin');
        }
    }, [status, history]);

    const loginHandler = (authData: any) => {
        sendRequest(authData);
    };

    if (status === 'completed' && loadTokenInfo) {
        authCtx.login(loadTokenInfo)
    }

    return (
        <ContentWrapper>
            <ContentContainer>
                <SigninForm isLoading={status === 'pending'} onLoginUser={loginHandler} />
            </ContentContainer>
            <Footer />
        </ContentWrapper>
    );
};

export default Signin;