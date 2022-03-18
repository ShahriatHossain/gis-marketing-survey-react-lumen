import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import NoQuestionsFound from "../../../components/admin/questions/NoQuestionsFound";
import QuestionFilterUI from "../../../components/admin/questions/QuestionFilterUI";
import QuestionList from "../../../components/admin/questions/QuestionList";
import LoadingSpinner from "../../../components/UI/LoadingSpinner";
import useHttpWithParam from "../../../hooks/use-httpWithParam";
import { getAllQuestionTypes } from "../../../lib/question-type-api";
import { getAllSurveys } from "../../../lib/survey-api";
import { BASE_URL } from "../../../utils/constants/common";
import { getAuthorizedHeader } from "../../../utils/helpers/utility-functions";
import { Question } from "../../../utils/models/Question";

const AllQuestions: React.FC = () => {
    const [questions, setQuestions] = useState<Question[]>([]);
    const [filteredQuestions, setFilteredQuestions] = useState<Question[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [selectedFilterSurvey, setSelectedFilterSurvey] = useState('');
    const [selectedFilterQuestionType, setSelectedFilterQuestionType] = useState('');
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

    const selectFilterSurveyHandler = (surveyId: string) => {
        setSelectedFilterSurvey(surveyId);
    }

    const selectFilterQuestionTypeHandler = (questionTypeId: string) => {
        setSelectedFilterQuestionType(questionTypeId);
    }

    const refreshRecordHandler = (questionId: any) => {
        setIsLoading(true);
        setQuestions(prevQuestions => prevQuestions.filter(q => q.id != questionId));
        delayLoading();
    }

    const filterQuestionsHandler = (surveyId: number, questionTypeName: string) => {
        setIsLoading(true);
        setFilteredQuestions(getFilteredQuestions(surveyId, questionTypeName));
        delayLoading();

    }

    const getFilteredQuestions = (surveyId: number, questionTypeName: string) => {
        if (surveyId && questionTypeName) {
            return questions.filter(q => q.survey_id == surveyId && q.question_type == questionTypeName)
        }

        if (surveyId) {
            return questions.filter(q => q.survey_id == surveyId)
        }

        if (questionTypeName) {
            return questions.filter(q => q.question_type == questionTypeName)
        }

        return questions;
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
            const response = await fetch(`${BASE_URL}/questions`, getAuthorizedHeader());
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
        setFilteredQuestions(transformedQuestions);
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


    return (
        <>
            <div className="row mb-2">
                <div className="col">
                    <QuestionFilterUI
                        surveys={loadedSurveys}
                        questionTypes={loadedQuestionTypes}
                        selecFilterSurvey={selectedFilterSurvey}
                        selectFilterQuestionType={selectedFilterQuestionType}
                        onFilterQuestions={filterQuestionsHandler}
                        onSelectFilterSurvey={selectFilterSurveyHandler}
                        onSelectFilterQuestionType={selectFilterQuestionTypeHandler}></QuestionFilterUI>
                </div>
                <div className="col">
                    <NavLink className="btn btn-primary btn-sm float-end" role="button" to={"/admin/new-question"}><i className="fas fa-plus"></i></NavLink>
                </div>
            </div>
            {filteredQuestions && filteredQuestions.length > 0 ?
                <QuestionList questions={filteredQuestions} onRefreshRecord={refreshRecordHandler} />
                : "No record found!"}
        </>
    )
}

export default AllQuestions;