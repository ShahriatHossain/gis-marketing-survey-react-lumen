import React, { useEffect, useState } from "react";

import * as jsonResult from "../assets/data/questionnaire.json";
import { Direction } from "../utils/enums";
import { Question } from "../utils/models";

type QuestionnaireContextObj = {
  questions: Question[];
  currentItemIdx: number;
  direction: string;
  addCurrentItemIdx: (idx: number) => void;
  addDirection: (direction: Direction) => void;
  addAnswer: (questionId: string, choiceIndex: number) => void;
};

export const QuestionnaireContext =
  React.createContext<QuestionnaireContextObj>({
    questions: [],
    currentItemIdx: 0,
    direction: "",
    addCurrentItemIdx: (idx: number) => {},
    addDirection: (direction: Direction) => {},
    addAnswer: (questionId: string, choiceIndex: number) => {},
  });

let isInitial = true;

const QuestionnaireContextProvider: React.FC = (props) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const [direction, setDirection] = useState("");

  const addAnswerHandler = (questionId: string, choiceIndex: number) => {
    setQuestions((prevQuestions) => {
      return prevQuestions.map((q) => ({
        ...q,
        choices:
          q.identifier === questionId
            ? q.choices?.map((c, idx) => ({
                ...c,
                selected:
                  idx === choiceIndex ? (c.selected ? false : true) : false,
              }))
            : q.choices,
      }));
    });
  };

  const addCurrentItemIdxHandler = (index: number) => {
    setCurrentItemIndex(index);
  };

  const addDirectionHandler = (direction: Direction) => {
    setDirection(direction);
  };

  useEffect(() => {
    if (isInitial) {
      setQuestions(jsonResult.questionnaire.questions);
      isInitial = false;
    }
  }, [questions, currentItemIndex]);

  const contextValue: QuestionnaireContextObj = {
    questions,
    direction,
    currentItemIdx: currentItemIndex,
    addCurrentItemIdx: addCurrentItemIdxHandler,
    addDirection: addDirectionHandler,
    addAnswer: addAnswerHandler,
  };

  return (
    <QuestionnaireContext.Provider value={contextValue}>
      {props.children}
    </QuestionnaireContext.Provider>
  );
};

export default QuestionnaireContextProvider;