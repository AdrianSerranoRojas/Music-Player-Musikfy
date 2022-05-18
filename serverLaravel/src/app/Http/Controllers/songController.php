<?php

namespace App\Http\Controllers;

use App\Models\Songs;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class songController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $songs = Songs::all();
        return $songs;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $song = new Songs();
        $song->songId = $request->songId;
        $song->userId = $request->userId;
        $song->action = $request->action;

        $song->save();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show()
    {
        $song = Songs::select('songId', DB::raw('count(*) as total'))->groupBy('songId')->get();

        return $song;
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
        $song =  Songs::findOrFail($request->$id);
        $song->songCounter = $request->songCounter;
        $song->songName = $request->songName;

        $song->save();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $song =  Songs::destroy($id);
        return $song;
    }


    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function showSongUser($songId, $userId)
    {
        $song = Songs::findAll($songId);
        return $song;
    }
}
