<?php

use App\Http\Controllers\songController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::controller(songController::class)->group(function(){
    Route::get("songs","index");
    Route::post("song","store");
    Route::get("song/{id}","show");
    Route::put("song/{id}","update");
    Route::get("song/{id}","destroy");
});