import { BrowserRouter, Route } from "react-router-dom";
import Admin from "./components/admin/Admin";
import { ContentWrapper } from "./components/admin/content-wrapper/ContentWrapper";
import { MainContent } from "./components/admin/main-content/MainContent";
import { SideNav } from "./components/admin/navigation/side-nav/SideNav";
import { TopNav } from "./components/admin/navigation/top-nav/TopNav";
import SigninPage from "./views/landing/signin/SigninPage";
import SignupPage from "./views/landing/signup/SignupPage";

function App() {
  const isAdmin: boolean = true;
  return (
    <BrowserRouter>
      <TopNav></TopNav>
      <Route exact path='/signin' component={SigninPage} />
      <Route exact path='/signup' component={SignupPage} />
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
