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

//TODO: will enabled verified middleware later for email verification
//$router->group(['middleware' => ['auth', 'verified']], function () use ($router) {

// Register, Login
$router->post('register', 'AuthController@register');
$router->post('login', 'AuthController@login');

// Reset password
$router->post('/password/reset-request', 'RequestPasswordController@sendResetLinkEmail');
$router->post('/password/reset', ['as' => 'password.reset', 'uses' => 'ResetPasswordController@reset']);
$router->post('/email/verify', ['as' => 'email.verify', 'uses' => 'AuthController@emailVerify']);

$router->group(['middleware' => ['auth']], function () use ($router) {
    $router->post('/email/request-verification', ['as' => 'email.request.verification', 'uses' => 'AuthController@emailRequestVerification']);
    $router->post('/logout', 'AuthController@logout');
    $router->post('/refresh', 'AuthController@refresh');

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

    // Find Questions
    $router->get('/questions', ['uses' => 'QuestionController@index']);
    $router->get('/questions/{id}', ['uses' => 'QuestionController@show']);
    // Question CRUD
    $router->post('/questions', ['uses' => 'QuestionController@create']);
    $router->put('/questions/{id}', ['uses' => 'QuestionController@update']);
    $router->delete('/questions/{id}', ['uses' => 'QuestionController@delete']);

    // Find Multiple Choices
    $router->get('/multichoices', ['uses' => 'MultipleChoiceController@index']);
    $router->get('/multichoices/{id}', ['uses' => 'MultipleChoiceController@show']);
    // Multiple Choice CRUD
    $router->post('/multichoices', ['uses' => 'MultipleChoiceController@create']);
    $router->put('/multichoices/{id}', ['uses' => 'MultipleChoiceController@update']);
    $router->delete('/multichoices/{id}', ['uses' => 'MultipleChoiceController@delete']);

    // Matches "/api/profile
    $router->get('profile', 'UserController@profile');
    // Matches "/api/users/1 
    //get one user by id
    $router->get('users/{id}', 'UserController@singleUser');
    // Matches "/api/users
    $router->get('users', 'UserController@allUsers');

    // Find Users
    $router->get('/users', ['uses' => 'UserController@index']);
    $router->get('/users/{id}', ['uses' => 'UserController@show']);
    // User CRUD
    $router->post('/users', ['uses' => 'UserController@create']);
    $router->put('/users/{id}', ['uses' => 'UserController@update']);
    $router->delete('/users/{id}', ['uses' => 'UserController@delete']);
});

// $router->group(['prefix' => 'api/v1'], function () use ($router) {


// });
