import { useContext } from "react";
import { QuestionnaireContext } from "../../store/questionnaire-context";

const ButtonOk: React.FC = () => {
    const quesCtx = useContext(QuestionnaireContext);

    const clickHandler = () =>
        quesCtx.addCurrentItemIdx(quesCtx.currentItemIndex + 1);
    
    const submitHandler = ()=> {
        //
    }

    return (
        <>
            {(quesCtx.currentItemIndex === quesCtx.currentSurvey.questions.length - 1)
                && <button onClick={submitHandler} type="button" className="btn btn-primary btn-sm">Submit</button>}

            {(quesCtx.currentItemIndex != quesCtx.currentSurvey.questions.length - 1)
                && <button onClick={clickHandler} type="button" className="btn btn-primary btn-sm">OK <i className="fas fa-check"></i></button>}
        </>

    )
}

export default ButtonOk;