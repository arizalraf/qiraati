<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\GradeController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\SubjectController;
use App\Http\Controllers\TeacherController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use function Termwind\render;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');
Route::get('dashboard',[DashboardController::class,'index'])->name('dashboard')->middleware('auth');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});
Route::get('testing',fn()=>Inertia::render('Testing'));

Route::controller(StudentController::class)->group(function(){
    Route::get('students','index')->name('students.index');
    Route::get('students/create','create')->name('students.create');
    Route::post('students/create','store')->name('students.store');

})->middleware('auth');

Route::controller(TeacherController::class)->group(function(){
    Route::get('teachers','index')->name('teachers.index');
    Route::get('teachers/create','create')->name('teachers.create');
    Route::post('teachers/create','store')->name('teachers.store');
})->middleware('auth');

Route::controller(SubjectController::class)->group(function(){
    Route::get('subjects','index')->name('subjects.index');
    Route::get('subjects/create','create')->name('subjects.create');
    Route::post('subjects/create','store')->name('subjects.store');
})->middleware('auth');
Route::controller(GradeController::class)->group(function(){
    Route::get('grades','index')->name('grades.index');
    Route::get('grades/create','create')->name('grades.create');
    Route::post('grades/create','store')->name('grades.store');
})->middleware('auth');

require __DIR__.'/auth.php';
