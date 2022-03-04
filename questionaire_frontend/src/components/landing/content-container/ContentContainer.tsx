export const ContentContainer: React.FC = ({ children }) => {
    return (
        <div id="layoutLanding_content">
            <main>
                <div className="container">
                    {children}
                </div>
            </main>
        </div>
    )
}