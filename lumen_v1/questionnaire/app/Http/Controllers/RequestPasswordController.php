<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\SendsPasswordResetEmails;

class RequestPasswordController extends Controller
{
    use SendsPasswordResetEmails;

    public function __construct()
    {
        $this->broker = 'users';
    }
}
