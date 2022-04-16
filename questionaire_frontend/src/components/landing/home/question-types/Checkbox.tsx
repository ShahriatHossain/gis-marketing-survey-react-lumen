import { QuestionType } from "../../../../utils/enums";
import { MultipleChoice } from "../../../../utils/models/MultipleChoice";

interface Params {
    index: number;
    choice: MultipleChoice,
    onAddAnswer: any
}
const Checkbox: React.FC<Params> = (props) => {
    return (
        <div key={props.index} className="form-check mb-3">
            <input className="form-check-input" type="checkbox"
                name={`checkboxEx${props.choice.id}${props.index}`}
                id={`checkboxEx${props.choice.id}${props.index}`}
                value={props.choice.value} onChange={() => props.onAddAnswer(
                    props.choice.question_id,
                    props.choice.id,
                    QuestionType.Checkbox
                )} />
            <label className="form-check-label" htmlFor={`checkboxEx${props.choice.id}${props.index}`}>
                {props.choice.label}
            </label>
        </div>
    )
}

export default Checkbox;