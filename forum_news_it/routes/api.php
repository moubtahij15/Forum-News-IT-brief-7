<?php

use App\Http\Controllers\PostController;
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
Route::resource('post',PostController::class);
Route::get('/post/search/{name}', [PostController::class, 'search']);


// Route::get('/post', [PostController::class, 'index']);
// Route::post('/post', [PostController::class, 'store']);
// Route::post('/post', function () {
//     return post::create([
//         'sjt_post'=>'test sjt',
//         'upvote'=>1,
//         'categorie_id'=>1,
//         'utilisateur_id'=>1,
//         'downvote'=>3,
//         'date_post'=>'2000-10-10'



//     ]);
// });
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
