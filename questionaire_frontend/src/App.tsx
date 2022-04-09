import { BrowserRouter, Route } from "react-router-dom";
import Admin from "./components/admin/Admin";
import { TopNav } from "./components/admin/navigation/top-nav/TopNav";
import Customer from "./components/customer/Customer";
import AdminRoute from "./components/UI/AdminRoute";
import CustomerRoute from "./components/UI/CustomerRoute";
import ForgotPassword from "./views/landing/forgot-password/ForgotPassword";
import HomePage from "./views/landing/home/HomePage";
import Signin from "./views/landing/signin/Signin";
import Signup from "./views/landing/signup/Signup";

function App() {
  return (
    <BrowserRouter>
      <TopNav></TopNav>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/signin' component={Signin} />
      <Route exact path='/signup' component={Signup} />
      <Route exact path='/forgot-password' component={ForgotPassword} />
      <AdminRoute exact path={'/admin/(.+)'} component={Admin} />
      <CustomerRoute exact path={'/customer/(.+)'} component={Customer} />
    </BrowserRouter>
  );
}

export default App;
