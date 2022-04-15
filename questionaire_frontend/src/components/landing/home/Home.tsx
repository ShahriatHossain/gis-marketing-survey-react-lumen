import { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { QuestionnaireContext } from "../../../store/questionnaire-context";
import { Direction } from "../../../utils/enums";
import { Survey } from "../../../utils/models/Survey";
import ButtonOk from "../../UI/ButtonOk";
import SliderDownButton from "../../UI/SliderDownButton";
import SliderUpButton from "../../UI/SliderUpButton";

import './Home.css';

interface SurveyParam {
    currentSurvey: Survey
}

const Home: React.FC<SurveyParam> = (props) => {
    const quesCtx = useContext(QuestionnaireContext);

    useEffect(() => {
        quesCtx.addCurrentSurvey(props.currentSurvey);
    }, []);

    const getClasses = (idx: number) => {
        let classList: string[] = ["row col-5 ml-110px"];
    
        quesCtx.currentItemIndex === idx
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
            <div className="row col-10">
                <h6 className="fw-bold text-center mt-3">{props.currentSurvey.name}</h6>
            </div>
            <div className="p-4 d-flex justify-content-center bg-white w-100">
                {quesCtx.currentSurvey.questions.map((qs, idx) => (
                    <div key={idx} className={getClasses(idx).join(" ")}>
                        <form className=" bg-white px-4" action="">
                            <p className="fw-bold">{idx + 1}. {qs.title}</p>
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