import { Link } from "react-router-dom";

const NoQuestionTypesFound: React.FC = () => {
    return (
        <div className="alert alert-light" role="alert">
            No question types found! &nbsp; 
            <Link className='alert-link' to='/new-question-type'>
                Add a Question Type
            </Link>.
        </div>
    )
}

export default NoQuestionTypesFound;