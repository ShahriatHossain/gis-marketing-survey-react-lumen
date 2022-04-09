<?php

namespace App\Models;

use Illuminate\Auth\Authenticatable;
use Illuminate\Contracts\Auth\Access\Authorizable as AuthorizableContract;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Lumen\Auth\Authorizable;

class SurveyResponse extends Model implements AuthenticatableContract, AuthorizableContract
{
    use Authenticatable, Authorizable, HasFactory;

    /**
     * Get the survey that this response belongs to
     */
    public function survey()
    {
        return $this->belongsTo('\App\Models\Survey');
    }

    /**
     * Get the customer that this response belongs to
     */
    public function user()
    {
        return $this->belongsTo('\App\Models\User');
    }

     /**
     * Get the answers that belong to this Response
     */
    public function answers()
    {
        return $this->hasMany('\App\Models\SurveyAnswer');
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'comments', 'user_id', 'survey_id'
    ];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [];
}
