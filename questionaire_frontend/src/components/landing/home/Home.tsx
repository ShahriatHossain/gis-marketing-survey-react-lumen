import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { QuestionnaireContext } from "../../../store/questionnaire-context";
import { Direction } from "../../../utils/enums";
import ButtonOk from "../../UI/ButtonOk";
import SliderDownButton from "../../UI/SliderDownButton";
import SliderUpButton from "../../UI/SliderUpButton";

import './Home.css';

const Home: React.FC = () => {
    const quesCtx = useContext(QuestionnaireContext);

    const getClasses = (idx: number) => {
        let classList: string[] = ["row col-5 ml-110px"];
    
        quesCtx.currentItemIdx === idx
          ? classList.push("question--active")
          : classList.push("question--inactive");
    
        if (quesCtx.direction === Direction.Prev) {
          classList.push("scroll--to-prev");
        }
    
        if (quesCtx.direction === Direction.Next) {
          classList.push("scroll--to-next");
        }
    
        return classList;
      };

    return (
        <>
            <div className="row col-12">
                <h6 className="fw-bold text-center mt-3">Let's start by finding out how beachwear aware yo...</h6>
            </div>
            <div className="p-4 d-flex justify-content-center bg-white w-100">
                {quesCtx.questions.map((qs, idx) => (
                    <div key={idx} className={getClasses(idx).join(" ")}>
                        <form className=" bg-white px-4" action="">
                            <p className="fw-bold">{idx + 1}. {qs.headline}</p>
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
                            <ButtonOk />
                        </div>
                        <p>&nbsp;</p>
                        <div className="text-end">
                            <div className="btn-group me-2" role="group" aria-label="First group">
                                <SliderUpButton />
                                <SliderDownButton />
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </>

    );
};

export default Home;