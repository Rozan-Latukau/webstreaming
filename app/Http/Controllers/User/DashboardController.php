<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Anime;

class DashboardController extends Controller
{
    public function index(){
        $featuredAnime = Anime::whereIsFeatured(true)->get();
        $anime = Anime::all();

        return inertia('User/Dashboard/Index', [
            'featuredAnime' => $featuredAnime,
            'anime' => $anime,
        ]);
    }
}
