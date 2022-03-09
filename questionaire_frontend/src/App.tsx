import { BrowserRouter, Route } from "react-router-dom";
import Admin from "./components/admin/Admin";
import { ContentWrapper } from "./components/admin/content-wrapper/ContentWrapper";
import { MainContent } from "./components/admin/main-content/MainContent";
import { SideNav } from "./components/admin/navigation/side-nav/SideNav";
import { TopNav } from "./components/admin/navigation/top-nav/TopNav";
import ForgotPassword from "./views/landing/forgot-password/ForgotPassword";
import HomePage from "./views/landing/home/HomePage";
import Signin from "./views/landing/signin/Signin";
import Signup from "./views/landing/signup/Signup";

function App() {
  const isAdmin: boolean = true;
  return (
    <BrowserRouter>
      <TopNav></TopNav>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/signin' component={Signin} />
      <Route exact path='/signup' component={Signup} />
      <Route exact path='/forgot-password' component={ForgotPassword} />
      <Route
        path={'/admin/(.+)'}
        render={() => (
          <>
            <Admin />
          </>
        )}
      />
    </BrowserRouter>
  );
}

export default App;
