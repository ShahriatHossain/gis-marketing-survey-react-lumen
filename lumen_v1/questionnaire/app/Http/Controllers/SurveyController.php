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
        //$this->middleware('auth');
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

    //
}
