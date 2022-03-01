import { NavLink } from "react-router-dom";

export const SideNavMenuContainer: React.FC = () => {
    return (
        <div className="sb-sidenav-menu">
            <div className="nav">
                <a className="nav-link" href="index.html">
                    <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                    Dashboard
                </a>

                {/* Survey */}
                <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseSuvey" aria-expanded="false" aria-controls="collapseSuvey">
                    <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
                    Survery
                    <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                </a>
                <div className="collapse" id="collapseSuvey" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                    <nav className="sb-sidenav-menu-nested nav">
                        <NavLink className="nav-link" to='/admin/surveys'>
                            All Surveys
                        </NavLink>
                        <NavLink className="nav-link" to='/admin/new-survey'>
                            Add a Survey
                        </NavLink>
                    </nav>
                </div>

                {/* Question */}
                <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseQuestion" aria-expanded="false" aria-controls="collapseQuestion">
                    <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
                    Question
                    <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                </a>
                <div className="collapse" id="collapseQuestion" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                    <nav className="sb-sidenav-menu-nested nav">
                        <NavLink className="nav-link" to='/admin/questions'>
                            All Questions
                        </NavLink>
                        <NavLink className="nav-link" to='/admin/new-question'>
                            Add a Question
                        </NavLink>
                    </nav>
                </div>

                {/* Multiple Choice */}
                <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseMultipleChoice" aria-expanded="false" aria-controls="collapseMultipleChoice">
                    <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
                    Multiple Choice
                    <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                </a>
                <div className="collapse" id="collapseMultipleChoice" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                    <nav className="sb-sidenav-menu-nested nav">
                        <NavLink className="nav-link" to='/admin/multichoices'>
                            All Multiple Choices
                        </NavLink>
                        <NavLink className="nav-link" to='/admin/new-multichoice'>
                            Add a Multiple Choice
                        </NavLink>
                    </nav>
                </div>

                {/* Customer */}
                <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseCustomer" aria-expanded="false" aria-controls="collapseCustomer">
                    <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
                    Customer
                    <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                </a>
                <div className="collapse" id="collapseCustomer" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                    <nav className="sb-sidenav-menu-nested nav">
                        <NavLink className="nav-link" to='/admin/customers'>
                            All Customers
                        </NavLink>
                        <NavLink className="nav-link" to='/admin/new-customer'>
                            Add a Customer
                        </NavLink>
                    </nav>
                </div>

                {/* Business Type */}
                <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseBusinessType" aria-expanded="false" aria-controls="collapseBusinessType">
                    <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
                    Business Type
                    <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                </a>
                <div className="collapse" id="collapseBusinessType" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                    <nav className="sb-sidenav-menu-nested nav">
                        <NavLink className="nav-link" to='/admin/business-types'>
                            All Business Types
                        </NavLink>
                        <NavLink className="nav-link" to='/admin/new-business-type'>
                            Add a Business Type
                        </NavLink>
                    </nav>
                </div>

                {/* Question Type */}
                <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseQuestionType" aria-expanded="false" aria-controls="collapseQuestionType">
                    <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
                    Question Type
                    <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                </a>
                <div className="collapse" id="collapseQuestionType" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                    <nav className="sb-sidenav-menu-nested nav">
                        <NavLink className="nav-link" to='/admin/question-types'>
                            All Question Types
                        </NavLink>
                        <NavLink className="nav-link" to='/admin/new-question-type'>
                            Add a Question Type
                        </NavLink>
                    </nav>
                </div>
            </div>
        </div>
    );
}