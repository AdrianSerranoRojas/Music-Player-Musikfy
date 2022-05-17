<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\SongResource;
use App\Models\Songs;
// use App\Http\Controllers\Controller as Controller;

use Validator;

class SongController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function sendResponse($result, $message)
    {
        $response = [
            'success' => true,
            'data'    => $result,
            'message' => $message,
        ];

        return response()->json($response, 200);
    }

    public function index()
    {
        //
        $songs = Songs::all();
        return $this->sendResponse(SongResource::collection($songs), 'Song fetched.');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $input = $request->all();

        //FILL WILL ALL REQUIRED VALIDATORS
        // $validator = Validator::make($input, [
        //     'songName' => 'required',
        //     'songCounter' => 'required'
        // ]);

        // if ($validator->fails()) {
        //     return $this->sendError($validator->errors());
        // }
        $songs = Songs::create($input);
        return $this->sendResponse(new SongResource($songs), 'Song created.');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
