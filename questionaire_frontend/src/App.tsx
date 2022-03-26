import { BrowserRouter, Route } from "react-router-dom";
import Admin from "./components/admin/Admin";
import { TopNav } from "./components/admin/navigation/top-nav/TopNav";
import PrivateRoute from "./components/UI/PrivateRoute";
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
      <PrivateRoute exact path={'/admin/(.+)'} component={Admin} />
    </BrowserRouter>
  );
}

export default App;
