<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\User\DashboardController;
use App\Http\Controllers\User\ShowController;
use App\Http\Controllers\User\SubscriptionPlanController;
use App\Http\Controllers\Admin\AnimeController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/



Route::redirect('/', '/login');

Route::middleware(['auth', 'role:user'])->prefix('dashboard')->name('user.dashboard.')->group(function () {
    Route::get('/', [DashboardController::class,'index'])->name('index');
    Route::get('anime/{anime:slug}', [ShowController::class, 'show'])->name('anime.show')->middleware('checkUserSubscription:true');
    Route::get('subscription-plan', [SubscriptionPlanController::class, 'index'])->name('subscriptionplan.index')->middleware('checkUserSubscription:false');
    Route::post('subscription-plan/{subscriptionPlan}/user-subscribe', [SubscriptionPlanController::class, 'userSubscribe'])->name('subscriptionplan.userSubscribe')->middleware('checkUserSubscription:false');
});

Route::middleware(['auth', 'role:admin'])->prefix('admin')->name('admin.dashboard.')->group(function () {
    Route::resource('anime', AnimeController::class);
});

Route::prefix('prototype')->name('prototype.')->group(function () {
   route::get('/login', function () {
       return Inertia::render('Prototype/Login');
    }) -> name('login');
   route::get('/register', function () {
        return Inertia::render('Prototype/Register');
    }) -> name('register');
    route::get('/dashboard', function () {
        return Inertia::render('Prototype/Dashboard');
    }) -> name('dashboard');
    route::get('/subscriptionPlan', function () {
        return Inertia::render('Prototype/SubscriptionPlan');
    }) -> name('subscriptionplan');
    route::get('/anime/{slug}', function () {
        return Inertia::render('Prototype/Anime/Show');
    }) -> name('anime.show');
});

require __DIR__.'/auth.php';
