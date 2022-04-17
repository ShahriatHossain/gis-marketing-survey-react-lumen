import { useContext } from "react";
import { QuestionnaireContext } from "../../store/questionnaire-context";

const ButtonOk: React.FC<{ onSubmit: any }> = ({ onSubmit }) => {
    const quesCtx = useContext(QuestionnaireContext);

    const clickHandler = () =>
        quesCtx.addCurrentItemIdx(quesCtx.currentItemIndex + 1);

    const submitHandler = () => {
        onSubmit();
    }

    return (
        <>
            {(quesCtx.currentSurvey && (quesCtx.currentItemIndex === quesCtx.currentSurvey.questions.length - 1))
                && <button onClick={submitHandler} type="button" className="btn btn-primary btn-sm">Submit</button>}

            {(quesCtx.currentSurvey && (quesCtx.currentItemIndex != quesCtx.currentSurvey.questions.length - 1))
                && <button onClick={clickHandler} type="button" className="btn btn-primary btn-sm">OK <i className="fas fa-check"></i></button>}
        </>

    )
}

export default ButtonOk;