import { Switch } from 'react-router-dom';
import DashboardPage from '../../../views/customer/dashboard/DashboardPage';
import EditUser from '../../../views/customer/users/EditUser';
import AdminFooter from '../../shared/AdminFooter';
import Breadcrumbs from '../../UI/Breadcrumbs';
import CustomerRoute from '../../UI/CustomerRoute';

export const MainContent: React.FC = () => {
    return (
        <div id="layoutSidenav_content">
            <main>
                <div className="container-fluid px-4">
                    <Breadcrumbs />
                    <div className="card mb-4">
                        <div className="card-body">
                            <Switch>
                                <CustomerRoute exact path='/customer/dashboard' component={DashboardPage} />
                                <CustomerRoute exact path='/customer/edit-user/:userId' component={EditUser} />
                            </Switch>
                        </div>
                    </div>
                </div>
            </main>
            <AdminFooter />
        </div>
    );
};