import { QuestionType } from "../../../../utils/enums";
import { MultipleChoice } from "../../../../utils/models/MultipleChoice";

interface Params {
    index: number;
    choice: MultipleChoice;
    onAddAnswer: any;
}

const Radio: React.FC<Params> = (props) => {
    return (
        <div key={props.index} className="form-check mb-3">
            <input className="form-check-input" type="radio"
                name="radioEx"
                id="radioEx"
                value={props.choice.value}
                onChange={(e) => props.onAddAnswer(
                    props.choice.question_id,
                    props.choice.id,
                    QuestionType.Radio,
                    e
                )} />
            <label className="form-check-label" htmlFor="radioEx">
                {props.choice.label}
            </label>
        </div>
    )
}

export default Radio;