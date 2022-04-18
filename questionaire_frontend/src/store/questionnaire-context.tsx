import React, { useEffect, useState } from "react";

import * as jsonResult from "../assets/data/questionnaire.json";
import { Direction, QuestionType } from "../utils/enums";
import { Question } from "../utils/models";
import { Answer } from "../utils/models/Answer";
import { Survey } from "../utils/models/Survey";

type QuestionnaireContextObj = {
  currentItemIndex: number;
  direction: string;
  currentSurvey: Survey | undefined;
  answers: Answer[];
  addCurrentItemIdx: (idx: number) => void;
  addDirection: (direction: Direction) => void;
  addAnswer: (questionId: number, choiceId: number, text: string, questionType: QuestionType, checked?: boolean) => void;
  addCurrentSurvey: (survey: Survey) => void;
};

export const QuestionnaireContext =
  React.createContext<QuestionnaireContextObj>({
    currentSurvey: undefined,
    answers: [],
    currentItemIndex: 0,
    direction: "",
    addCurrentItemIdx: (idx: number) => { },
    addDirection: (direction: Direction) => { },
    addAnswer: (questionId: number, choiceId: number, text: string, questionType: QuestionType, checked?: boolean) => { },
    addCurrentSurvey: (survey: Survey) => { }
  });

const QuestionnaireContextProvider: React.FC = (props) => {
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const [direction, setDirection] = useState("");
  const [currentSurvey, setCurrentSurvey] = useState<Survey | undefined>();
  const [answers, setAnswers] = useState<Answer[]>([]);

  const addAnswerHandler = (questionId: number, choiceId: number, text: string, questionType: QuestionType, checked?: boolean) => {
    setAnswers((prevAnswers) => {
      switch (questionType) {
        case QuestionType.Radio:
          prevAnswers = prevAnswers.filter(ans => ans.question_id != questionId);
          return addNewAnswer(prevAnswers, questionId, choiceId, text);

        case QuestionType.Checkbox:
          prevAnswers = prevAnswers.filter(ans => !(ans.question_id === questionId && ans.multiple_choice_id === choiceId));
          return addNewAnswer(prevAnswers, questionId, choiceId, text);

        case QuestionType.Text:
          prevAnswers = prevAnswers.filter(ans => ans.question_id != questionId);
          return addNewAnswer(prevAnswers, questionId, choiceId, text);
      }
    })
  };

  const addCurrentItemIdxHandler = (index: number) => {
    setCurrentItemIndex(index);
  };

  const addDirectionHandler = (direction: Direction) => {
    setDirection(direction);
  };

  const addCurrentSurveyHandler = (survey: Survey) => {
    setCurrentSurvey(survey);
  };

  const addNewAnswer = (prevAnswers: Answer[], questionId: number, choiceId: number, text: string) => {
    prevAnswers.push({
      id: 0,
      question_id: questionId,
      multiple_choice_id: choiceId === 0 ? null : choiceId,
      answer_text: text,
      created_at: '',
      updated_at: ''
    });

    return prevAnswers;
  }

  useEffect(() => {
  }, [currentItemIndex]);

  const contextValue: QuestionnaireContextObj = {
    direction,
    currentItemIndex,
    currentSurvey,
    answers,
    addCurrentItemIdx: addCurrentItemIdxHandler,
    addDirection: addDirectionHandler,
    addAnswer: addAnswerHandler,
    addCurrentSurvey: addCurrentSurveyHandler
  };

  return (
    <QuestionnaireContext.Provider value={contextValue}>
      {props.children}
    </QuestionnaireContext.Provider>
  );
};

export default QuestionnaireContextProvider; 
