<?php

/** @var \Laravel\Lumen\Routing\Router $router */

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function () use ($router) {
    return $router->app->version();
});

$router->group(['prefix' => 'api/v1'], function () use ($router) {

    // Find Business Types
    $router->get('/business-types', ['uses' => 'BusinessTypeController@index']);
    $router->get('/business-types/{id}', ['uses' => 'BusinessTypeController@show']);
    // Business Type CRUD
    $router->post('/business-types', ['uses' => 'BusinessTypeController@create']);
    $router->put('/business-types/{id}', ['uses' => 'BusinessTypeController@update']);
    $router->delete('/business-types/{id}', ['uses' => 'BusinessTypeController@delete']);

    // Find Customers
    $router->get('/customers', ['uses' => 'CustomerController@index']);
    $router->get('/customers/{id}', ['uses' => 'CustomerController@show']);
    // Customer CRUD
    $router->post('/customers', ['uses' => 'CustomerController@create']);
    $router->put('/customers/{id}', ['uses' => 'CustomerController@update']);
    $router->delete('/customers/{id}', ['uses' => 'CustomerController@delete']);

    // Find Question Types
    $router->get('/question-types', ['uses' => 'QuestionTypeController@index']);
    $router->get('/question-types/{id}', ['uses' => 'QuestionTypeController@show']);
    // Question Type CRUD
    $router->post('/question-types', ['uses' => 'QuestionTypeController@create']);
    $router->put('/question-types/{id}', ['uses' => 'QuestionTypeController@update']);
    $router->delete('/question-types/{id}', ['uses' => 'QuestionTypeController@delete']);

    // Find Surveys
    $router->get('/surveys', ['uses' => 'SurveyController@index']);
    $router->get('/surveys/{id}', ['uses' => 'SurveyController@show']);
    // Survey CRUD
    $router->post('/surveys', ['uses' => 'SurveyController@create']);
    $router->put('/surveys/{id}', ['uses' => 'SurveyController@update']);
    $router->delete('/surveys/{id}', ['uses' => 'SurveyController@delete']);

    // Question CRUD
    $router->post('/surveys/{survey_id}/questions', ['uses' => 'SurveyController@createQuestion']);
    $router->put('/surveys/{survey_id}/questions/{question_id}', ['uses' => 'SurveyController@updateQuestion']);
    $router->delete('/surveys/{survey_id}/questions/{question_id}', ['uses' => 'SurveyController@deleteQuestion']);
    // Find Questions
    $router->get('/questions', ['uses' => 'SurveyController@showAllQuestions']);
    $router->get('/surveys/{survey_id}/questions', ['uses' => 'SurveyController@showAllQuestionsFromSurvey']);
    $router->get('/surveys/{survey_id}/questions/{question_id}', ['uses' => 'SurveyController@showOneQuestion']);

    // Find Multiple Choices
    $router->get('/multichoices', ['uses' => 'MultipleChoiceController@index']);
    $router->get('/multichoices/{id}', ['uses' => 'MultipleChoiceController@show']);
    // Multiple Choice CRUD
    $router->post('/multichoices', ['uses' => 'MultipleChoiceController@create']);
    $router->put('/multichoices/{id}', ['uses' => 'MultipleChoiceController@update']);
    $router->delete('/multichoices/{id}', ['uses' => 'MultipleChoiceController@delete']);
});
