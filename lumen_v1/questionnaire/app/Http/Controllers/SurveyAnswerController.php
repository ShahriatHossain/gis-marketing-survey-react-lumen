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
        return response()->json(SurveyAnswer::all());
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
