import { useContext } from "react";
import { QuestionnaireContext } from "../../store/questionnaire-context";

const ButtonOk: React.FC = () => {
    const quesCtx = useContext(QuestionnaireContext);

    const clickHandler = () =>
        quesCtx.addCurrentItemIdx(quesCtx.currentItemIdx + 1);

    return (
        <button onClick={clickHandler} type="button" className="btn btn-primary btn-sm">OK <i className="fas fa-check"></i></button>
    )
}

export default ButtonOk;