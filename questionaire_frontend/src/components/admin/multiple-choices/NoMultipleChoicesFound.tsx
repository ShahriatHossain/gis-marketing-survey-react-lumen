import { Link } from "react-router-dom";

const NoMultipleChoicesFound: React.FC = () => {
    return (
        <div className="alert alert-light" role="alert">
            No multiple choices found! &nbsp; 
            <Link className='alert-link' to='/admin/new-multichoice'>
                Add a MultipleChoice
            </Link>.
        </div>
    )
}

export default NoMultipleChoicesFound;