import { Route, Switch, Redirect } from 'react-router-dom';
import AllBusinessTypes from '../../../views/admin/business-types/AllBusinessTypes';
import EditBusinessType from '../../../views/admin/business-types/EditBusinessType';
import NewBusinessType from '../../../views/admin/business-types/NewBusinessType';
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
                                    <Redirect to='/surveys' />
                                </Route>

                                 {/* Survey */}
                                <Route path='/surveys' exact>
                                    <AllSurveys />
                                </Route>
                                <Route path='/new-survey' exact>
                                    <NewSurvey />
                                </Route>
                                <Route path='/edit-survey/:surveyId' exact>
                                    <EditSurvey />
                                </Route>

                                {/* Business Type */}
                                <Route path='/business-types' exact>
                                    <AllBusinessTypes />
                                </Route>
                                <Route path='/new-business-type' exact>
                                    <NewBusinessType />
                                </Route>
                                <Route path='/edit-business-type/:businessTypeId' exact>
                                    <EditBusinessType />
                                </Route>

                                {/* Question Type */}
                                <Route path='/question-types' exact>
                                    <AllQuestionTypes />
                                </Route>
                                <Route path='/new-question-type' exact>
                                    <NewQuestionType />
                                </Route>
                                <Route path='/edit-question-type/:questionTypeId' exact>
                                    <EditQuestionType />
                                </Route>

                                {/* Question */}
                                <Route path='/questions' exact>
                                    <AllQuestions />
                                </Route>
                                <Route path='/new-question' exact>
                                    <NewQuestion />
                                </Route>
                                <Route path='/edit-question/:surveyId/:questionId' exact>
                                    <EditQuestion />
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