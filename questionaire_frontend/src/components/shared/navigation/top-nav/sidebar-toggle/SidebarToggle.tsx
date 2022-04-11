import { useState } from "react";
import $ from 'jquery';

export const SidebarToggle: React.FC = () => {
    const [open, setOpen] = useState(true);

    const clickHandler = () => {
        open && $('body').addClass('sb-sidenav-toggled');
        !open && $('body').removeClass('sb-sidenav-toggled');

        setOpen(!open);
    }

    return (
        <button onClick={clickHandler} className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0"><i className="fas fa-bars"></i></button>
    );
}