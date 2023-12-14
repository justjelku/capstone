<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\attendanceController; 
use App\Http\Controllers\qrController; 

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


// Route::get('/attendance/{id}', [attendanceController::class, 'show']); // Route to fetch attendance data by ID
// Route::post('/attendance', [attendanceController::class, 'store']); // Route to save attendance data
Route::post('/attendance', [attendanceController::class, 'attendance']);// Route to save attendance data

