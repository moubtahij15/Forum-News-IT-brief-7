<?php


namespace App\Http\Controllers;

use App\Models\post;

use Illuminate\Http\Request;
use PhpParser\Node\Stmt\Return_;
use Illuminate\Support\Facades\DB;


class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return post::all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate(
            [
                'sjt_post' => 'required',
                'upvote' => 'required',
                'categorie_id' => 'required',
                'utilisateur_id' => 'required',
                'downvote' => 'required',
                'date_post' => 'required'
            ]
        );
        return post::create($request->all());
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return DB::table('posts')
        ->join('utilisateurs', 'posts.utilisateur_id', '=', 'utilisateurs.id')
        ->join('categories', 'posts.categorie_id', '=', 'categories.id')
        ->where("utilisateurs.id", 'like',  $id)
        ->select('*')
        ->get();
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
        $post = Post::find($id);
        $post->update($request->all());
        return $post;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        return post::destroy(($id));
    }
    /**
     * search for a name 
     *
     * @param  string  $name
     * @return \Illuminate\Http\Response
     */
    public function search($name)
    {
        return post::where("sjt_post", 'like', '%' . $name . '%')->get();
    }

    public function getAllPosts()
    {
        return DB::table('posts')
            ->join('utilisateurs', 'posts.utilisateur_id', '=', 'utilisateurs.id')
            ->join('categories', 'posts.categorie_id', '=', 'categories.id')
            // ->join('comments', 'posts.id', '=', 'comments.post_id',"left")
            // ->select('*')
            ->select("*","posts.id")
            ->get();
        // return post::join
        // ('utilisateurs', 'posts.utilisateur_id', '=', 'utilisateurs.id')
        // // ->join('orders', 'users.id', '=', 'orders.user_id')
        // ->select('posts.id')
        // ->get();
    }
    
}
