<?php

namespace App\Models;

use Illuminate\Auth\Authenticatable;
use Illuminate\Contracts\Auth\Access\Authorizable as AuthorizableContract;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Lumen\Auth\Authorizable;

class Question extends Model implements AuthenticatableContract, AuthorizableContract
{
    use Authenticatable, Authorizable, HasFactory;

    /**
     * Get the survey that this question belongs to
     */
    public function survey()
    {
        return $this->belongsTo('\App\Models\Survey');
    }

    /**
     * Get the answers that belong to this Question
     */
    public function answers()
    {
        return $this->hasMany('\App\Models\SurveyAnswer');
    }

    /**
     * Get the choices that belong to this Question
     */
    public function choices()
    {
        return $this->hasMany('\App\Models\MultipleChoice');
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'title', 'description', 'required', 'question_type', 'survey_id'
    ];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [];
}
