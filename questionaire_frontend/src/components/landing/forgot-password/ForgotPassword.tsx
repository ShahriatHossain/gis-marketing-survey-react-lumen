import { NavLink } from "react-router-dom";

const ForgotPassword: React.FC = () => {
    return (
        <div className="row justify-content-center">
            <div className="col-lg-5">
                <div className="card shadow-lg border-0 rounded-lg mt-5">
                    <div className="card-header"><h3 className="text-center font-weight-light my-4">Password Recovery</h3></div>
                    <div className="card-body">
                        <div className="small mb-3 text-muted">Enter your email address and we will send you a link to reset your password.</div>
                        <form>
                            <div className="form-floating mb-3">
                                <input className="form-control" id="inputEmail" type="email" placeholder="name@example.com" />
                                <label htmlFor="inputEmail">Email address</label>
                            </div>
                            <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
                                <NavLink className="small" to="/signin">Return to login</NavLink>
                                <a className="btn btn-primary" href="login.html">Reset Password</a>
                            </div>
                        </form>
                    </div>
                    <div className="card-footer text-center py-3">
                        <div className="small"><NavLink to="/signup">Need an account? Sign up!</NavLink></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;