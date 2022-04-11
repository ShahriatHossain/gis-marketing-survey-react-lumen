export const TopNavContainer: React.FC = ({ children }) => {
    return (
        <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
            {children}
        </nav>
    );
}