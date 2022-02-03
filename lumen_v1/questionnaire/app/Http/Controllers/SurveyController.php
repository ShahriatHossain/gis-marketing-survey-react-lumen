<?php

namespace App\Http\Controllers;

use App\Models\Question;
use App\Models\Survey;
use Illuminate\Http\Request;

class SurveyController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    // FIND
    public function index()
    {
        return response()->json(Survey::all());
    }

    public function show($id)
    {
        return response()->json(Survey::find($id));
    }

    // CRUD
    public function create(Request $request)
    {
        $entity = Survey::create($request->all());

        return response()->json($entity, 201);
    }

    public function update($id, Request $request)
    {
        $entity = Survey::findOrFail($id);
        $entity->update($request->all());
        return response()->json($entity, 200);
    }

    public function delete($id)
    {
        Survey::findOrFail($id)->delete();
        return response('Deleted Successfully', 200);
    }

    // CRUD Questions
    public function createQuestion($survey_id, Request $request)
    {
        $survey = Survey::find($survey_id);
        $question = Question::create([
            'title' => $request->title,
            'description' => $request->description,
            'required' => $request->required,
            'question_type' => $request->question_type,
            'survey_id' => $survey->id
        ]);
        return response()->json($question, 201);
    }

    // FIND Questions
    public function showAllQuestions()
    {
        $results = app('db')->select("
        SELECT questions.*, surveys.name as survey_name, question_types.description as question_type_description
        FROM questions
        INNER JOIN surveys ON surveys.id = questions.survey_id
        INNER JOIN question_types ON questions.question_type = question_types.name");
        return response()->json($results, 200);
    }

    public function showAllQuestionsFromSurvey($survey_id)
    {
        $survey = Survey::find($survey_id);
        $questions = $survey->questions;
        return response()->json($questions, 200);
    }

    public function showOneQuestion($survey_id, $question_id)
    {
        $survey = Survey::find($survey_id);
        $question = $survey->questions
            ->where('id', '=', $question_id)
            ->first();
        return response()->json($question, 200);
    }

    public function updateQuestion($survey_id, $question_id, Request $request)
    {
        $survey = Survey::find($survey_id);
        $question = $survey->questions
            ->where('id', '=', $question_id)
            ->first()
            ->update($request->all());

        $updatedQuestion = $survey->questions
            ->where('id', '=', $question_id)
            ->first();

        return response()->json($updatedQuestion, 200);
    }

    public function deleteQuestion($survey_id, $question_id)
    {
        $survey = Survey::find($survey_id);
        $question = $survey->questions
            ->where('id', '=', $question_id)
            ->first()
            ->delete();
        return response('Question Deleted Successfully', 200);
    }

    //
}
