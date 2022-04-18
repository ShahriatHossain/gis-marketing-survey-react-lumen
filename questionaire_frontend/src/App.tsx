import { BrowserRouter, Route } from "react-router-dom";
import Admin from "./views/admin/Admin";
import Customer from "./views/customer/Customer";
import { TopNav } from "./components/shared/navigation/top-nav/TopNav";
import AdminRoute from "./components/UI/AdminRoute";
import CustomerRoute from "./components/UI/CustomerRoute";
import ForgotPassword from "./views/landing/forgot-password/ForgotPassword";
import HomePage from "./views/landing/home/HomePage";
import Signin from "./views/landing/signin/Signin";
import Signup from "./views/landing/signup/Signup";
import Success from "./views/landing/success/Success";

function App() {
  return (
    <BrowserRouter>
      <TopNav></TopNav>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/signin' component={Signin} />
      <Route exact path='/signup' component={Signup} />
      <Route exact path='/message-success' component={Success} />
      <Route exact path='/forgot-password' component={ForgotPassword} />
      <AdminRoute exact path={'/admin/(.+)'} component={Admin} />
      <CustomerRoute exact path={'/customer/(.+)'} component={Customer} />
    </BrowserRouter>
  );
}

export default App;
