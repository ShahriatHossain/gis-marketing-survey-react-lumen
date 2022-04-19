<?php

namespace App\Models;

use Illuminate\Auth\Authenticatable;
use Illuminate\Contracts\Auth\Access\Authorizable as AuthorizableContract;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Lumen\Auth\Authorizable;

class SurveyAnswer extends Model implements AuthenticatableContract, AuthorizableContract
{
    use Authenticatable, Authorizable, HasFactory;

    /**
     * Get the response that this answer belongs to
     */
    public function response()
    {
        return $this->belongsTo('\App\Models\SurveyResponse');
    }

    /**
     * Get the question that this answer belongs to
     */
    public function question()
    {
        return $this->belongsTo('\App\Models\Question');
    }

    /**
     * Get the question that this answer belongs to
     */
    public function choice()
    {
        return $this->belongsTo('\App\Models\MultipleChoice');
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'answer_text', 'question_id', 'multiple_choice_id'
    ];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [];
}
