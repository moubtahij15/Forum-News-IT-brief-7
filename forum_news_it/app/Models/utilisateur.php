<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\utilisateur as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;


class utilisateur extends Model
{
    use HasApiTokens, HasFactory, Notifiable;

  /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
  
    protected $fillable = [
        'nom',
        'prenom',
        'email',
        'date_naissance',
        'age',
        'pass',
    ];


}
