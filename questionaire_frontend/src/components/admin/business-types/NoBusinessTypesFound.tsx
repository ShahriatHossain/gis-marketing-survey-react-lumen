import { Link } from "react-router-dom";

const NoBusinessTypesFound: React.FC = () => {
    return (
        <div className="alert alert-light" role="alert">
            No business types found! &nbsp; 
            <Link className='alert-link' to='/new-business-type'>
                Add a Business Type
            </Link>.
        </div>
    )
}

export default NoBusinessTypesFound;