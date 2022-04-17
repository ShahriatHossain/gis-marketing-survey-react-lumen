import { QuestionType } from "../../../../utils/enums";
import { Question } from "../../../../utils/models/Question";

interface Params {
    question: Question,
    onAddAnswer: any
}
const TextControler: React.FC<Params> = (props) => {
    return (
        <div className="mb-3">
            <textarea className="form-control" name={`textEx${props.question.id}`} id={`textEx${props.question.id}`} rows={3}
                onKeyUp={() => props.onAddAnswer(
                    props.question.id,
                    0,
                    QuestionType.Text
                )}></textarea>
        </div>
    )
}

export default TextControler;