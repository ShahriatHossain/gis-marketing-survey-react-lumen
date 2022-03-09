<?php

namespace App\Http\Controllers;

use App\Models\QuestionType;
use Illuminate\Http\Request;

class QuestionTypeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    // FIND
    public function index()
    {
        return response()->json(QuestionType::all());
    }

    public function show($id)
    {
        return response()->json(QuestionType::find($id));
    }

    // CRUD
    public function create(Request $request)
    {
        $entity = QuestionType::create($request->all());

        return response()->json($entity, 201);
    }

    public function update($id, Request $request)
    {
        $entity = QuestionType::findOrFail($id);
        $entity->update($request->all());
        return response()->json($entity, 200);
    }

    public function delete($id)
    {
        QuestionType::findOrFail($id)->delete();
        return response('Deleted Successfully', 200);
    }

    //
}
