<?php

namespace App\Http\Controllers;

use App\Models\MultipleChoice;
use Illuminate\Http\Request;

class MultipleChoiceController extends Controller
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
        $results = app('db')->select("
        SELECT mc.*, questions.title as question_title FROM multiple_choices as mc 
        INNER JOIN questions ON questions.id = mc.question_id");
        return response()->json($results, 200);
    }

    public function show($id)
    {
        return response()->json(MultipleChoice::find($id));
    }

    // CRUD
    public function create(Request $request)
    {
        $entity = MultipleChoice::create($request->all());

        return response()->json($entity, 201);
    }

    public function update($id, Request $request)
    {
        $entity = MultipleChoice::findOrFail($id);
        $entity->update($request->all());
        return response()->json($entity, 200);
    }

    public function delete($id)
    {
        MultipleChoice::findOrFail($id)->delete();
        return response('Deleted Successfully', 200);
    }

    //
}
