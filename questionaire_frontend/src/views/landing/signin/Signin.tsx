import { ContentContainer } from "../../../components/landing/content-container/ContentContainer";
import { ContentWrapper } from "../../../components/landing/content-wrapper/ContentWrapper";
import SigninForm from "../../../components/landing/signin/SigninForm";
import Footer from "../../../components/landing/footer/Footer";
import useHttpWithParam from "../../../hooks/use-httpWithParam";
import { useHistory } from "react-router-dom";
import { useContext, useEffect } from "react";
import { loginUser } from "../../../lib/auth-api";
import AuthContext from "../../../store/auth-context";
import { BASE_URL } from "../../../utils/constants/common";
import { getAuthorizedHeader } from "../../../utils/helpers/utility-functions";

const Signin: React.FC = () => {
    const { sendRequest, status, data: loadTokenInfo, error } = useHttpWithParam(loginUser);
    const history = useHistory();
    const authCtx = useContext(AuthContext);

    useEffect(() => {
        if (status === 'completed' && loadTokenInfo && !error) {
            authCtx.login(loadTokenInfo);
            fetchUserProfile();
        }
    }, [status, history]);

    const loginHandler = (authData: any) => {
        sendRequest(authData);
    };

    const fetchUserProfile = async () => {
        let loadedUser: any = null;

        try {
            const response = await fetch(`${BASE_URL}/profile`, getAuthorizedHeader());
            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Could not fetch profile.');
            }

            loadedUser = {
                ...data,
            };

            if (loadedUser) {
                authCtx.setProfile(loadedUser);

                if (loadedUser.role_id === 1) {
                    history.push('/admin/dashboard');
                }
                else if (loadedUser.role_id === 2) {
                    history.push('/customer/dashboard');
                }
            }

        } catch (err: any) {
            throw new Error(err.message || 'Could not fetch user.');
        }
    };

    return (
        <ContentWrapper>
            <ContentContainer>
                <SigninForm isLoading={status === 'pending'} error={error} onLoginUser={loginHandler} />
            </ContentContainer>
            <Footer />
        </ContentWrapper>
    );
};

export default Signin;