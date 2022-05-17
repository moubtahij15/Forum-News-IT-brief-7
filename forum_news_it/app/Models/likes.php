<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\utilisateur;
use App\Models\post;


class likes extends Model
{
    use HasFactory;
    protected $fillable = [

        "post_id",
        "id",
        "utilisateur_id"
    ];
    public function utilisateur()
    {
        return $this->belongsTo(utilisateur::class);
    }
    public function posts()
    {
        return $this->belongsTo(Post::class);
    }
}
