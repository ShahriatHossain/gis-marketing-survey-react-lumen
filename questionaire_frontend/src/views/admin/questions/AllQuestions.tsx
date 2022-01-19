import React, { useEffect, useState } from "react";
import NoQuestionsFound from "../../../components/admin/questions/NoQuestionsFound";
import QuestionList from "../../../components/admin/questions/QuestionList";
import LoadingSpinner from "../../../components/UI/LoadingSpinner";
import useHttpWithParam from "../../../hooks/use-httpWithParam";
import { getAllQuestions } from "../../../lib/question-api";
import { getAllQuestionTypes } from "../../../lib/question-type-api";
import { getAllSurveys } from "../../../lib/survey-api";
import { BASE_URL } from "../../../utils/constants/common";
import { Question } from "../../../utils/models/Question";

const AllQuestions: React.FC = () => {
    const [questions, setQuestions] = useState<Question[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const { sendRequest: sendRequestForSurveys, status: statusForSurveys, data: loadedSurveys } = useHttpWithParam(
        getAllSurveys,
        true
    );
    const { sendRequest: sendRequestForQuestionTypes, status: statusForQuestionTypes, data: loadedQuestionTypes } = useHttpWithParam(
        getAllQuestionTypes,
        true
    );

    useEffect(() => {
        fetchQuestions();
        sendRequestForSurveys();
        sendRequestForQuestionTypes();

        return () => {
            setQuestions([]);
            setIsLoading(false);
            setError(null);
        };

    }, [sendRequestForSurveys, sendRequestForQuestionTypes]);

    const refreshRecordHandler = (questionId: any) => {
        setIsLoading(true);
        setQuestions(prevQuestions => prevQuestions.filter(q => q.id != questionId));
        delayLoading();
    }

    const filterQuestionsHandler = (surveyId: number, questionTypeName: string) => {
        setIsLoading(true);
        setQuestions(prevQuestions => {
            if (surveyId && questionTypeName) {
                return prevQuestions.filter(q => q.survey_id == surveyId && q.question_type == questionTypeName)
            }

            if (surveyId) {
                return prevQuestions.filter(q => q.survey_id == surveyId)
            }

            if (questionTypeName) {
                return prevQuestions.filter(q => q.question_type == questionTypeName)
            }

            return prevQuestions;
        });

        delayLoading();

    }

    const delayLoading = () => {
        setTimeout(() => {
            setIsLoading(false);
        }, 200);
    }

    const fetchQuestions = async () => {

        setError(null);
        setIsLoading(true);
        const transformedQuestions = [];

        try {
            const response = await fetch(`${BASE_URL}/questions`);
            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Could not fetch questions.');
            }

            for (const key in data) {
                const questionObj = {
                    id: key,
                    ...data[key],
                };

                transformedQuestions.push(questionObj);
            }

        } catch (err: any) {
            setError(err.message || 'Something went wrong!');
        }

        setQuestions(transformedQuestions);
        setIsLoading(false);
    }

    if (isLoading) {
        return (
            <React.Fragment>
                <LoadingSpinner />
            </React.Fragment>
        );
    }

    if (error) {
        return <p className='centered focused'>{error}</p>;
    }

    if ((!questions || questions.length === 0)) {
        return <NoQuestionsFound />;
    }


    return <QuestionList questions={questions} surveys={loadedSurveys} questionTypes={loadedQuestionTypes} onRefreshRecord={refreshRecordHandler} onFilterQuestions={filterQuestionsHandler} />;
}

export default AllQuestions;