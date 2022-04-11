import { NavLink } from "react-router-dom";

export const Logo: React.FC = () => {
    return (
        <NavLink className="navbar-brand ps-3" to="/">Questionnaire</NavLink>
    );
}