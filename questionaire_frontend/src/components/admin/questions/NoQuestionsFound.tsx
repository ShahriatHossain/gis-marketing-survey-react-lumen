import { Link } from "react-router-dom";

const NoQuestionsFound: React.FC = () => {
    return (
        <div className="alert alert-light" role="alert">
            No questions found! &nbsp; 
            <Link className='alert-link' to='/admin/new-question'>
                Add a Question
            </Link>.
        </div>
    )
}

export default NoQuestionsFound;