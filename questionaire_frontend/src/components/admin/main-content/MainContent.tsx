import { Route, Switch, Redirect } from 'react-router-dom';
import AllBusinessTypes from '../../../views/admin/business-types/AllBusinessTypes';
import EditBusinessType from '../../../views/admin/business-types/EditBusinessType';
import NewBusinessType from '../../../views/admin/business-types/NewBusinessType';
import AllCustomers from '../../../views/admin/customers/AllCustomers';
import EditCustomer from '../../../views/admin/customers/EditCustomer';
import NewCustomer from '../../../views/admin/customers/NewCustomer';
import AllMultipleChoices from '../../../views/admin/multiple-choices/AllMultipleChoices';
import EditMultipleChoice from '../../../views/admin/multiple-choices/EditMultipleChoice';
import NewMultipleChoice from '../../../views/admin/multiple-choices/NewMultipleChoice';
import AllQuestionTypes from '../../../views/admin/question-types/AllQuestionTypes';
import EditQuestionType from '../../../views/admin/question-types/EditQuestionType';
import NewQuestionType from '../../../views/admin/question-types/NewQuestionType';
import AllQuestions from '../../../views/admin/questions/AllQuestions';
import EditQuestion from '../../../views/admin/questions/EditQuestion';
import NewQuestion from '../../../views/admin/questions/NewQuestion';
import AllSurveys from '../../../views/admin/surveys/AllSurveys';
import EditSurvey from '../../../views/admin/surveys/EditSurvey';
import NewSurvey from '../../../views/admin/surveys/NewSurvey';

export const MainContent: React.FC = () => {
    return (
        <div id="layoutSidenav_content">
            <main>
                <div className="container-fluid px-4">
                    <h1 className="mt-4">Sidenav Light</h1>
                    <ol className="breadcrumb mb-4">
                        <li className="breadcrumb-item"><a href="index.html">Dashboard</a></li>
                        <li className="breadcrumb-item active">Sidenav Light</li>
                    </ol>
                    <div className="card mb-4">
                        <div className="card-body">
                            <Switch>
                                <Route path='/' exact>
                                    <Redirect to='/admin/surveys' />
                                </Route>

                                {/* Survey */}
                                <Route path='/admin/surveys' exact>
                                    <AllSurveys />
                                </Route>
                                <Route path='/admin/new-survey' exact>
                                    <NewSurvey />
                                </Route>
                                <Route path='/admin/edit-survey/:surveyId' exact>
                                    <EditSurvey />
                                </Route>

                                {/* Business Type */}
                                <Route path='/admin/business-types' exact>
                                    <AllBusinessTypes />
                                </Route>
                                <Route path='/admin/new-business-type' exact>
                                    <NewBusinessType />
                                </Route>
                                <Route path='/admin/edit-business-type/:businessTypeId' exact>
                                    <EditBusinessType />
                                </Route>

                                {/* Question Type */}
                                <Route path='/admin/question-types' exact>
                                    <AllQuestionTypes />
                                </Route>
                                <Route path='/admin/new-question-type' exact>
                                    <NewQuestionType />
                                </Route>
                                <Route path='/admin/edit-question-type/:questionTypeId' exact>
                                    <EditQuestionType />
                                </Route>

                                {/* Question */}
                                <Route path='/admin/questions' exact>
                                    <AllQuestions />
                                </Route>
                                <Route path='/admin/new-question' exact>
                                    <NewQuestion />
                                </Route>
                                <Route path='/admin/edit-question/:surveyId/:questionId' exact>
                                    <EditQuestion />
                                </Route>

                                {/* Multiple Choice */}
                                <Route path='/admin/multichoices' exact>
                                    <AllMultipleChoices />
                                </Route>
                                <Route path='/admin/new-multichoice' exact>
                                    <NewMultipleChoice />
                                </Route>
                                <Route path='/admin/edit-multichoice/:multiChoiceId' exact>
                                    <EditMultipleChoice />
                                </Route>

                                {/* Customer */}
                                <Route path='/admin/customers' exact>
                                    <AllCustomers />
                                </Route>
                                <Route path='/admin/new-customer' exact>
                                    <NewCustomer />
                                </Route>
                                <Route path='/admin/edit-customer/:customerId' exact>
                                    <EditCustomer />
                                </Route>

                                {/* <Route path='*'>
                                    <NotFound />
                                </Route> */}
                            </Switch>
                        </div>
                    </div>
                </div>
            </main>
            <footer className="py-4 bg-light mt-auto">
                <div className="container-fluid px-4">
                    <div className="d-flex align-items-center justify-content-between small">
                        <div className="text-muted">Copyright &copy; Your Website 2021</div>
                        <div>
                            <a href="#">Privacy Policy</a>
                            &middot;
                            <a href="#">Terms &amp; Conditions</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};