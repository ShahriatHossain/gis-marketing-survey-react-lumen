import { Route, Switch, Redirect } from 'react-router-dom';
import AllBusinessTypes from '../../../views/admin/business-types/AllBusinessTypes';
import EditBusinessType from '../../../views/admin/business-types/EditBusinessType';
import NewBusinessType from '../../../views/admin/business-types/NewBusinessType';
import AllCustomers from '../../../views/admin/customers/AllCustomers';
import EditCustomer from '../../../views/admin/customers/EditCustomer';
import NewCustomer from '../../../views/admin/customers/NewCustomer';
import DashboardPage from '../../../views/admin/dashboard/DashboardPage';
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
import AllUsers from '../../../views/admin/users/AllUsers';
import EditUser from '../../../views/admin/users/EditUser';
import NewUser from '../../../views/admin/users/NewUser';
import Breadcrumbs from '../../UI/Breadcrumbs';
import PrivateRoute from '../../UI/PrivateRoute';

export const MainContent: React.FC = () => {
    return (
        <div id="layoutSidenav_content">
            <main>
                <div className="container-fluid px-4">
                    <Breadcrumbs />
                    <div className="card mb-4">
                        <div className="card-body">
                            <Switch>

                                {/* Dashboard */}
                                <PrivateRoute exact path='/admin/dashboard' component={DashboardPage} />

                                {/* Survey */}
                                <PrivateRoute exact path='/admin/surveys' component={AllSurveys} />
                                <PrivateRoute exact path='/admin/new-survey' component={NewSurvey} />
                                <PrivateRoute exact path='/admin/edit-survey/:surveyId' component={EditSurvey} />

                                {/* Business Type */}
                                <PrivateRoute exact path='/admin/business-types' component={AllBusinessTypes} />
                                <PrivateRoute exact path='/admin/new-business-type' component={NewBusinessType} />
                                <PrivateRoute exact path='/admin/edit-business-type/:businessTypeId' component={EditBusinessType} />

                                {/* Question Type */}
                                <PrivateRoute exact path='/admin/question-types' component={AllQuestionTypes} />
                                <PrivateRoute exact path='/admin/new-question-type' component={NewQuestionType} />
                                <PrivateRoute exact path='/admin/edit-question-type/:questionTypeId' component={EditQuestionType} />

                                {/* Question */}
                                <PrivateRoute exact path='/admin/questions' component={AllQuestions} />
                                <PrivateRoute exact path='/admin/new-question' component={NewQuestion} />
                                <PrivateRoute exact path='/admin/edit-question/:questionId' component={EditQuestion} />

                                {/* Multiple Choice */}
                                <PrivateRoute exact path='/admin/multichoices' component={AllMultipleChoices} />
                                <PrivateRoute exact path='/admin/new-multichoice' component={NewMultipleChoice} />
                                <PrivateRoute exact path='/admin/edit-multichoice/:multiChoiceId' component={EditMultipleChoice} />

                                {/* User */}
                                <PrivateRoute exact path='/admin/users' component={AllUsers} />
                                <PrivateRoute exact path='/admin/new-user' component={NewUser} />
                                <PrivateRoute exact path='/admin/edit-user/:userId' component={EditUser} />

                                {/* Customer */}
                                <PrivateRoute exact path='/admin/customers' component={AllCustomers} />
                                <PrivateRoute exact path='/admin/new-customer' component={NewCustomer} />
                                <PrivateRoute exact path='/admin/edit-customer/:customerId' component={EditCustomer} />

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