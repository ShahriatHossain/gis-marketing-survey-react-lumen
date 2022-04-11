import { NavLink } from "react-router-dom";

const Home: React.FC = () => {
    return (
        <>
            <div className="row col-12">
                <h6 className="fw-bold text-center mt-3">Let's start by finding out how beachwear aware yo...</h6>
            </div>
            <div className="p-4 d-flex justify-content-center bg-white w-100">
                <div className="row col-5">
                    <form className=" bg-white px-4" action="">
                        <p className="fw-bold">1. How satisfied are you with our product?</p>
                        <div className="form-check mb-2">
                            <input className="form-check-input" type="radio" name="exampleForm" id="radioExample1" />
                            <label className="form-check-label" htmlFor="radioExample1">
                                Option 1
                            </label>
                        </div>
                        <div className="form-check mb-2">
                            <input className="form-check-input" type="radio" name="exampleForm" id="radioExample2" />
                            <label className="form-check-label" htmlFor="radioExample2">
                                Option 2
                            </label>
                        </div>
                        <div className="form-check mb-2">
                            <input className="form-check-input" type="radio" name="exampleForm" id="radioExample3" />
                            <label className="form-check-label" htmlFor="radioExample3">
                                Option 3
                            </label>
                        </div>
                    </form>
                    <p>&nbsp;</p>
                    <div className="text-start">
                        <button type="button" className="btn btn-primary btn-sm">OK <i className="fas fa-check"></i></button>
                    </div>
                    <p>&nbsp;</p>
                    <div className="text-end">
                        <div className="btn-group me-2" role="group" aria-label="First group">
                            <button type="button" className="btn btn-primary"><i className="fas fa-angle-up"></i></button>
                            <button type="button" className="btn btn-primary"><i className="fas fa-angle-down"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Home;