<?php

namespace App\Http\Controllers;

use App\Models\Question;
use Illuminate\Http\Request;

class QuestionController extends Controller
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
        return response()->json(Question::all());
    }

    public function show($id)
    {
        return response()->json(Question::find($id));
    }

    // CRUD
    public function create(Request $request)
    {
        $entity = Question::create($request->all());

        return response()->json($entity, 201);
    }

    public function update($id, Request $request)
    {
        $entity = Question::findOrFail($id);
        $entity->update($request->all());
        return response()->json($entity, 200);
    }

    public function delete($id)
    {
        Question::findOrFail($id)->delete();
        return response('Deleted Successfully', 200);
    }

    //
}
