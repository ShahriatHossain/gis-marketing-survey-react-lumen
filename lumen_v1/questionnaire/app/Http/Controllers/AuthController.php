<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use  App\Models\User;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    /**
     * Store a new user.
     *
     * @param  Request  $request
     * @return Response
     */
    public function register(Request $request)
    {
        //validate incoming request 
        $this->validate($request, [
            'name' => 'required|string',
            'email' => 'required|email|unique:users',
            'role_id' => 'required',
            'password' => 'required|min:6|confirmed',
        ]);

        try {

            $user = new User;
            $user->name = $request->input('name');
            $user->email = $request->input('email');
            $user->role_id = $request->input('role_id');
            $plainPassword = $request->input('password');
            $user->password = app('hash')->make($plainPassword);

            $user->save();

            //return successful response
            return response()->json(['user' => $user, 'message' => 'CREATED'], 201);
        } catch (\Exception $e) {
            //return error message
            return response()->json(['message' => $e->getMessage()], 409);
        }
    }

    /**
     * Get a JWT via given credentials.
     *
     * @param  Request  $request
     * @return Response
     */
    public function login(Request $request)
    {
        //validate incoming request 
        $this->validate($request, [
            'email' => 'required|string',
            'password' => 'required|string',
        ]);

        $credentials = $request->only(['email', 'password']);

        if (!$token = Auth::attempt($credentials)) {
            return response()->json(['message' => "User doesn't exist, please try again!"], 401);
        }

        return $this->respondWithToken($token);
    }

    /**
     * Log the user out (Invalidate the token). Requires a login to use as the
     * JWT in the Authorization header is what is invalidated
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        //auth()->user()->currentAccessToken()->delete();
        auth()->logout();
        return response()->json(['message' => 'User successfully signed out']);
    }

    /**
     * Refresh the current token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh()
    {
        return $this->respondWithToken(Auth::refresh());
    }

    /**
     * Request an email verification email to be sent.
     *
     * @param  Request  $request
     * @return Response
     */
    public function emailRequestVerification(Request $request)
    {
        if ($request->user()->hasVerifiedEmail()) {
            return response()->json('Email address is already verified.');
        }

        $request->user()->sendEmailVerificationNotification();

        return response()->json('Email request verification sent to ' . Auth::user()->email);
    }
    /**
     * Verify an email using email and token from email.
     *
     * @param  Request  $request
     * @return Response
     */
    public function emailVerify(Request $request)
    {
        $this->validate($request, [
            'token' => 'required|string',
        ]);
        \Tymon\JWTAuth\Facades\JWTAuth::getToken();
        \Tymon\JWTAuth\Facades\JWTAuth::parseToken()->authenticate();
        if (!$request->user()) {
            return response()->json('Invalid token', 401);
        }

        if ($request->user()->hasVerifiedEmail()) {
            return response()->json('Email address ' . $request->user()->getEmailForVerification() . ' is already verified.');
        }
        $request->user()->markEmailAsVerified();
        return response()->json('Email address ' . $request->user()->email . ' successfully verified.');
    }
}
