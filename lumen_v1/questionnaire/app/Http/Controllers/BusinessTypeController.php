<?php

namespace App\Http\Controllers;

use App\Models\BusinessType;
use Illuminate\Http\Request;

class BusinessTypeController extends Controller
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
        return response()->json(BusinessType::all());
    }

    public function show($id)
    {
        return response()->json(BusinessType::find($id));
    }

    // CRUD
    public function create(Request $request)
    {
        $entity = BusinessType::create($request->all());

        return response()->json($entity, 201);
    }

    public function update($id, Request $request)
    {
        $entity = BusinessType::findOrFail($id);
        $entity->update($request->all());
        return response()->json($entity, 200);
    }

    public function delete($id)
    {
        BusinessType::findOrFail($id)->delete();
        return response('Deleted Successfully', 200);
    }

    //
}
