import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import AuthContext from "../../../../../store/auth-context";

export const ProfileNav: React.FC = () => {
    const [open, setOpen] = useState(false);
    const authCtx = useContext(AuthContext);

    return (
        <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
            <li className="nav-item dropdown">
                <a className={open ? 'nav-link dropdown-toggle show' : 'nav-link dropdown-toggle'} id="navbarDropdown" href="#" role="button"
                    data-bs-toggle="dropdown" aria-expanded={open}
                    onClick={() => setOpen(!open)}>
                    <i className="fas fa-user fa-fw"></i>
                </a>
                <ul className={open ? 'dropdown-menu dropdown-menu-end show' : 'dropdown-menu dropdown-menu-end'} aria-labelledby="navbarDropdown">
                    {authCtx.isLoggedIn ?
                        <>
                            <li><NavLink className="dropdown-item" to={"/settings"}>Settings</NavLink></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><a className="dropdown-item" href="#!" onClick={() => authCtx.logout()}>Logout</a></li>
                        </>
                        :
                        <>
                            <li><NavLink className="dropdown-item" to={"/signin"}>Login</NavLink></li>
                            <li><NavLink className="dropdown-item" to={"/signup"}>Signup</NavLink></li>
                        </>
                    }

                </ul>
            </li>
        </ul>
    );
}