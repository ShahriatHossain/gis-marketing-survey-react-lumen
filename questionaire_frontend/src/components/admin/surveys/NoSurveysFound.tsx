import { Link } from "react-router-dom";

const NoSurveysFound: React.FC = () => {
    return (
        <div className="alert alert-light" role="alert">
            No surveys found! &nbsp; 
            <Link className='alert-link' to='/admin/new-survey'>
                Add a Survey
            </Link>.
        </div>
    )
}

export default NoSurveysFound;