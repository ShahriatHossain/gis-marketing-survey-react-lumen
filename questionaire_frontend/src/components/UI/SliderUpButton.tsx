import { useContext } from "react";
import { QuestionnaireContext } from "../../store/questionnaire-context";
import { Direction } from "../../utils/enums";

const SliderUpButton: React.FC = () => {
    const quesCtx = useContext(QuestionnaireContext);

    const clickHandler = () => {
        quesCtx.addCurrentItemIdx(quesCtx.currentItemIndex - 1);
        quesCtx.addDirection(Direction.Prev);
    };

    return (
        <button disabled={quesCtx.currentItemIndex === 0}
            onClick={clickHandler} type="button" className="btn btn-primary btn-sm">
            <i className="fas fa-angle-up"></i>
        </button>
    )
}

export default SliderUpButton;