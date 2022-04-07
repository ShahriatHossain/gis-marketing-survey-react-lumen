import { useState } from "react";
import { NavLink } from "react-router-dom";
import { SideNavItemModel } from "../../../../../utils/models/SideNavItemModel";

const SideNavItem: React.FC<SideNavItemModel> = (props) => {
    const [open, setOpen] = useState(false);

    const itemClickHandler = () => {
        setOpen(!open);

        props.onItemClick(props.id, open);
    };

    return (
        <>
            <a className={props.isCollapsed ? 'nav-link collapsed' : 'nav-link'} href="#" data-bs-toggle="collapse"
                aria-expanded={props.isCollapsed} aria-controls={props.id}
                onClick={itemClickHandler}>
                <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
                {props.name}
                <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
            </a>
            <div className={props.isCollapsed ? 'collapse' : 'collapse show'} aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                <nav className="sb-sidenav-menu-nested nav">
                    {props.links.map((link, idx) => (
                        <NavLink key={idx} className="nav-link" to={link.path}>
                            {link.name}
                        </NavLink>
                    ))}
                </nav>
            </div>
        </>
    );
};

export default SideNavItem;