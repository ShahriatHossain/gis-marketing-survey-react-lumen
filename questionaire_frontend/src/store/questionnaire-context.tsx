import React, { useEffect, useState } from "react";

import * as jsonResult from "../assets/data/questionnaire.json";
import { Direction } from "../utils/enums";
import { Question } from "../utils/models";
import { Survey } from "../utils/models/Survey";

type QuestionnaireContextObj = {
  questions: Question[];
  currentItemIndex: number;
  direction: string;
  currentSurvey: Survey;
  addCurrentItemIdx: (idx: number) => void;
  addDirection: (direction: Direction) => void;
  addAnswer: (questionId: number, choiceIndex: number) => void;
  addCurrentSurvey: (survey: Survey) => void;
};

export const QuestionnaireContext =
  React.createContext<QuestionnaireContextObj>({
    questions: [],
    currentSurvey: {
      id: 0,
      name: '',
      description: '',
      private: false,
      active: false,
      created_at: '',
      updated_at: '',
      questions: []
    },
    currentItemIndex: 0,
    direction: "",
    addCurrentItemIdx: (idx: number) => { },
    addDirection: (direction: Direction) => { },
    addAnswer: (questionId: number, choiceIndex: number) => { },
    addCurrentSurvey: (survey: Survey) => { }
  });

let isInitial = true;

const QuestionnaireContextProvider: React.FC = (props) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const [direction, setDirection] = useState("");
  const [currentSurvey, setCurrentSurvey] = useState<Survey>({
    id: 0,
    name: '',
    description: '',
    private: false,
    active: false,
    created_at: '',
    updated_at: '',
    questions: []
  });

  const addAnswerHandler = (questionId: number, choiceIndex: number) => {
    // setCurrentSurvey((prevSurvey) => {
    //   return prevSurvey.questions.map((q) => ({
    //     ...q,
    //     choices:
    //       q.id === questionId
    //         ? q.choices?.map((c, idx) => ({
    //           ...c,
    //           selected:
    //             idx === choiceIndex ? (c.selected ? false : true) : false,
    //         }))
    //         : q.choices,
    //   }));
    // });
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

  useEffect(() => {
    if (isInitial) {
      setQuestions(jsonResult.questionnaire.questions);
      isInitial = false;
    }
  }, [questions, currentItemIndex]);

  const contextValue: QuestionnaireContextObj = {
    questions,
    direction,
    currentItemIndex,
    currentSurvey,
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