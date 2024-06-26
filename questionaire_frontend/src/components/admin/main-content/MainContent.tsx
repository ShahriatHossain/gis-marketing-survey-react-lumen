import { Switch } from 'react-router-dom';
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
import AdminRoute from '../../UI/AdminRoute';
import AdminFooter from '../../shared/AdminFooter';

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
                                <AdminRoute exact path='/admin/dashboard' component={DashboardPage} />

                                {/* Survey */}
                                <AdminRoute exact path='/admin/surveys' component={AllSurveys} />
                                <AdminRoute exact path='/admin/new-survey' component={NewSurvey} />
                                <AdminRoute exact path='/admin/edit-survey/:surveyId' component={EditSurvey} />

                                {/* Question Type */}
                                <AdminRoute exact path='/admin/question-types' component={AllQuestionTypes} />
                                <AdminRoute exact path='/admin/new-question-type' component={NewQuestionType} />
                                <AdminRoute exact path='/admin/edit-question-type/:questionTypeId' component={EditQuestionType} />

                                {/* Question */}
                                <AdminRoute exact path='/admin/questions' component={AllQuestions} />
                                <AdminRoute exact path='/admin/new-question' component={NewQuestion} />
                                <AdminRoute exact path='/admin/edit-question/:questionId' component={EditQuestion} />

                                {/* Multiple Choice */}
                                <AdminRoute exact path='/admin/multichoices' component={AllMultipleChoices} />
                                <AdminRoute exact path='/admin/new-multichoice' component={NewMultipleChoice} />
                                <AdminRoute exact path='/admin/edit-multichoice/:multiChoiceId' component={EditMultipleChoice} />

                                {/* User */}
                                <AdminRoute exact path='/admin/users' component={AllUsers} />
                                <AdminRoute exact path='/admin/new-user' component={NewUser} />
                                <AdminRoute exact path='/admin/edit-user/:userId' component={EditUser} />

                                {/* <Route path='*'>
                                    <NotFound />
                                </Route> */}
                            </Switch>
                        </div>
                    </div>
                </div>
            </main>
            <AdminFooter />
        </div>
    );
};