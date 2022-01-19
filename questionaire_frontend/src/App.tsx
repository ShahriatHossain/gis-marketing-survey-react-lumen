import { BrowserRouter } from "react-router-dom";
import { ContentWrapper } from "./components/admin/content-wrapper/ContentWrapper";
import { MainContent } from "./components/admin/main-content/MainContent";
import { SideNav } from "./components/admin/navigation/side-nav/SideNav";
import { TopNav } from "./components/admin/navigation/top-nav/TopNav";

function App() {
  return (
    <BrowserRouter>
      <TopNav></TopNav>
      <ContentWrapper>
        <SideNav></SideNav>
        <MainContent></MainContent>
      </ContentWrapper>
    </BrowserRouter>
  );
}

export default App;
