import { ContentContainer } from "../../../components/landing/content-container/ContentContainer";
import { ContentWrapper } from "../../../components/landing/content-wrapper/ContentWrapper";
import SigninForm from "../../../components/landing/signin/SigninForm";
import Footer from "../../../components/landing/footer/Footer";
import useHttpWithParam from "../../../hooks/use-httpWithParam";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import { addCustomer } from "../../../lib/customer-api";

const Signin: React.FC = () => {
    const { sendRequest, status } = useHttpWithParam(addCustomer);
    const history = useHistory();

    useEffect(() => {
        if (status === 'completed') {
            history.push('/admin');
        }
    }, [status, history]);

    const addCustomerHandler = (customerData: any) => {
        sendRequest(customerData);
    };
    
    return (
        <ContentWrapper>
            <ContentContainer>
                <SigninForm isLoading={status === 'pending'} onAddCustomer={addCustomerHandler} />
            </ContentContainer>
            <Footer />
        </ContentWrapper>
    );
};

export default Signin;