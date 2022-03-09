import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { ContentContainer } from "../../../components/landing/content-container/ContentContainer";
import { ContentWrapper } from "../../../components/landing/content-wrapper/ContentWrapper";
import Footer from "../../../components/landing/footer/Footer";
import SignupForm from "../../../components/landing/signup/SignupForm";
import useHttpWithParam from "../../../hooks/use-httpWithParam";
import { addCustomer } from "../../../lib/customer-api";

const Signup: React.FC = () => {
    const { sendRequest, status } = useHttpWithParam(addCustomer);
    const history = useHistory();

    useEffect(() => {
        if (status === 'completed') {
            history.push('/signin');
        }
    }, [status, history]);

    const addCustomerHandler = (customerData: any) => {
        sendRequest(customerData);
    };
    return (
        <ContentWrapper>
            <ContentContainer>
                <SignupForm isLoading={status === 'pending'} onAddCustomer={addCustomerHandler} />
            </ContentContainer>
            <Footer />
        </ContentWrapper>
    );
};

export default Signup;