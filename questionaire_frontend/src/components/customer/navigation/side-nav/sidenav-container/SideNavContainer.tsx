export const SideNavContainer: React.FC = ({ children }) => {
    return (
        <nav className="sb-sidenav accordion sb-sidenav-light" id="sidenavAccordion">
            {children}
        </nav>
    );
}