<?php

namespace App\Http\Controllers;

use App\Models\Question;
use App\Models\SurveyAnswer;
use Illuminate\Http\Request;

class SurveyAnswerController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        //$this->middleware('auth');
    }

    // FIND
    public function index()
    {
        $results = app('db')->select(
            "(SELECT s.name AS Survey, q.title AS Question, c.label AS Chocie, COUNT(c.id) AS Responses, 
        a.answer_text AS Text FROM questions AS q, multiple_choices AS c, survey_answers AS a, surveys AS s 
        WHERE a.question_id = q.id AND q.survey_id=s.id AND a.multiple_choice_id = c.id 
        GROUP BY a.multiple_choice_id) 
        UNION ALL 
        (SELECT s.name AS Survey, q.title AS Question, c.label AS Chocie, COUNT(c.id) AS Responses, 
        a.answer_text AS Text FROM questions AS q, multiple_choices AS c, survey_answers AS a, 
        surveys AS s WHERE a.question_id = q.id AND q.survey_id=s.id AND a.multiple_choice_id IS NULL
        GROUP BY a.multiple_choice_id)"
        );
        return response()->json($results);
    }

    public function show($id)
    {
        return response()->json(SurveyAnswer::find($id));
    }

    // CRUD
    public function create(Request $request)
    {
        $entity = SurveyAnswer::create($request->all());

        return response()->json($entity, 201);
    }

    public function createMulti(Request $request)
    {
        $answers = $request->answers;
        $data = array();
        foreach ($answers as $answer) {
            if (!empty($answer)) {
                $data[] = [
                    'question_id' => $answer["question_id"],
                    'multiple_choice_id' => $answer["multiple_choice_id"],
                    'answer_text' => $answer["answer_text"]
                ];
            }
        }

        $entity = SurveyAnswer::insert($data);
        return response()->json($entity, 201);
    }

    public function update($id, Request $request)
    {
        $entity = SurveyAnswer::findOrFail($id);
        $entity->update($request->all());
        return response()->json($entity, 200);
    }

    public function delete($id)
    {
        SurveyAnswer::findOrFail($id)->delete();
        return response('Deleted Successfully', 200);
    }

    //
}
