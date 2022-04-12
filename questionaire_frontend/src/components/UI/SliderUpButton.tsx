import { useContext } from "react";
import { QuestionnaireContext } from "../../store/questionnaire-context";
import { Direction } from "../../utils/enums";

const SliderUpButton: React.FC = () => {
    const quesCtx = useContext(QuestionnaireContext);

    const clickHandler = () => {
        quesCtx.addCurrentItemIdx(quesCtx.currentItemIdx - 1);
        quesCtx.addDirection(Direction.Prev);
    };

    return (
        <button disabled={quesCtx.currentItemIdx === 0}
            onClick={clickHandler} type="button" className="btn btn-primary">
            <i className="fas fa-angle-up"></i>
        </button>
    )
}

export default SliderUpButton;