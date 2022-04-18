import { useContext, useEffect } from "react";
import $ from 'jquery';

import { QuestionnaireContext } from "../../../store/questionnaire-context";
import { Direction, QuestionType } from "../../../utils/enums";
import { Survey } from "../../../utils/models/Survey";
import ButtonOk from "../../UI/ButtonOk";
import SliderDownButton from "../../UI/SliderDownButton";
import SliderUpButton from "../../UI/SliderUpButton";
import Checkbox from "./question-types/Checkbox";

import './Home.css';
import Radio from "./question-types/Radio";
import TextControler from "./question-types/Text";
import useHttpWithParam from "../../../hooks/use-httpWithParam";
import { addMultiAnswer } from "../../../lib/survey-answer-api";
import { useHistory } from "react-router-dom";

interface SurveyParam {
    currentSurvey: Survey
}

const Home: React.FC<SurveyParam> = (props) => {
    const quesCtx = useContext(QuestionnaireContext);
    const history = useHistory();

    const { sendRequest: sendRequestForAnswer, status: statusAnswer } = useHttpWithParam(addMultiAnswer);

    useEffect(() => {
        quesCtx.addCurrentSurvey(props.currentSurvey);
    }, []);

    useEffect(() => {
        if(statusAnswer === 'completed') {
            history.push('/message-success');
        }
    }, [statusAnswer]);

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

    const addAnswerHandler = (questionId: number, choiceId: number, questionType: QuestionType, event?: any) => {

        if (questionType === QuestionType.Text) {
            setTimeout(() => {
                const text: any = $(`#textEx${questionId}`) ? $(`#textEx${questionId}`).val() : '';
                quesCtx.addAnswer(questionId, choiceId, text, questionType);
            }, 1000);
        } else {
            quesCtx.addAnswer(questionId, choiceId, '', questionType, event && event.target.checked);
        }
    }

    const submitHandler = () => {
        sendRequestForAnswer(quesCtx.answers);
    }

    return (
        <>
            <div className="row col-10">
                <h6 className="fw-bold text-center mt-3">{props.currentSurvey.name}</h6>
            </div>
            <div className="p-4 d-flex justify-content-center bg-white w-100">
                {quesCtx.currentSurvey && quesCtx.currentSurvey.questions.map((qs, idx) => (
                    <div key={idx} className={getClasses(idx).join(" ")}>
                        <form className=" bg-white px-4" action="">
                            <p className="fw-bold">{idx + 1}. {qs.title}</p>

                            <div className={qs.question_type != QuestionType.Text ? 'two-columns-container' : ''}>
                                {(qs.question_type === QuestionType.Radio) && qs.choices && qs.choices.map((ch, chIdx) => (
                                    <Radio key={chIdx} onAddAnswer={addAnswerHandler} index={chIdx} choice={ch} />
                                ))}

                                {(qs.question_type === QuestionType.Checkbox) && qs.choices && qs.choices.map((ch, chIdx) => (
                                    <Checkbox key={chIdx} onAddAnswer={addAnswerHandler} index={chIdx} choice={ch} />
                                ))}

                                {qs.question_type === QuestionType.Text &&
                                    <TextControler question={qs} onAddAnswer={addAnswerHandler} />
                                }

                            </div>


                        </form>
                        <p>&nbsp;</p>
                        <div className="text-start">
                            <ButtonOk onSubmit={submitHandler} />
                        </div>
                        <p>&nbsp;</p>
                        <div className="text-end">
                            <div className="btn-group me-2" role="group" aria-label="First group">
                                <SliderUpButton />
                                <SliderDownButton />
                            </div>
                        </div>
                    </div>
                ))
                }

            </div >
        </>

    );
};

export default Home;