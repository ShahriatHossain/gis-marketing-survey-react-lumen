import { Link } from "react-router-dom";

const NoCustomersFound: React.FC = () => {
    return (
        <div className="alert alert-light" role="alert">
            No customers found! &nbsp; 
            <Link className='alert-link' to='/admin/new-customer'>
                Add a Customer
            </Link>.
        </div>
    )
}

export default NoCustomersFound;