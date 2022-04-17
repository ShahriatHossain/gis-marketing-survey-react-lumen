import { useContext } from "react";
import { QuestionnaireContext } from "../../store/questionnaire-context";
import { Direction } from "../../utils/enums";

const SliderDownButton: React.FC = () => {
    const quesCtx = useContext(QuestionnaireContext);

    const clickHandler = () => {
        quesCtx.addCurrentItemIdx(quesCtx.currentItemIndex + 1);
        quesCtx.addDirection(Direction.Next);
    };

    return (
        <button type="button" className="btn btn-primary btn-sm"
            disabled={quesCtx.currentSurvey && (quesCtx.currentItemIndex === quesCtx.currentSurvey.questions.length - 1)}
            onClick={clickHandler}>
            <i className="fas fa-angle-down"></i>
        </button>
    )
}

export default SliderDownButton;