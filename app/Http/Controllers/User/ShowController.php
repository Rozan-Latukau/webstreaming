<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Anime;

class ShowController extends Controller
{
    public function show(Anime $anime) {
        return inertia('User/Dashboard/Anime/Show', [
            'anime' => $anime,
        ]);;
    }
}
