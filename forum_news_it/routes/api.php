<?php

use App\Http\Controllers\PostController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use Illuminate\Routing\Route as RoutingRoute;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// public routes 

// Route::resource('post',PostController::class);
//start comment

Route::get('/comment/{id}', [CommentController::class, 'show']);
Route::get('/getAllComments', [CommentController::class, 'getAllComments']);


// end comment


Route::post('/register', [AuthController::class, 'register']);
Route::get('/post', [PostController::class, 'index']);
Route::get('/post/{id}', [PostController::class, 'show']);
Route::get('/post/search/{name}', [PostController::class, 'search']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/getAllPosts', [PostController::class, 'getAllPosts']);


Route::get('/token', function () {
    return csrf_token();
});


// protected routes


Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::post('/post', [PostController::class, 'store']);
    Route::put('/post/{id}', [PostController::class, 'update']);
    Route::delete('/post/{id}', [PostController::class, 'destroy']);

    Route::post('/logout', [AuthController::class, 'logout']);
});
