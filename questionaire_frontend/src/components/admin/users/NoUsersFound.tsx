import { Link } from "react-router-dom";

const NoUsersFound: React.FC = () => {
    return (
        <div className="alert alert-light" role="alert">
            No users found! &nbsp; 
            <Link className='alert-link' to='/admin/new-user'>
                Add a User
            </Link>.
        </div>
    )
}

export default NoUsersFound;