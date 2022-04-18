import { NavLink } from "react-router-dom";

const Success: React.FC = () => {
    return (
        <div className="row col-10 mt-5 ">
            <h6 className="fw-bold text-center mt-3 text-secondary">You have successfully added your answers. <NavLink to="/">Home</NavLink></h6>
        </div>
    );
}

export default Success;