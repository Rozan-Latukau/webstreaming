<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Anime;
use Illuminate\Http\Request;
use App\Http\Requests\Admin\Anime\Store;
use Storage;
use Str;

class AnimeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia('Admin/Anime/Index');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia('Admin/Anime/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Store $request)
    {
        $data = $request->validated();
        $data['thumbnail'] = Storage::disk('public')->put('animes', $request->file('thumbnail'));
        $data['slug'] = Str::slug($data['name']);
        $anime = Anime::create($data);
        return redirect(route('admin.dashboard.anime.index')) -> with([
            'message' => "Successfully Entered Anime",
            'type' => 'success'
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Anime $anime)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Anime $anime)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Anime $anime)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Anime $anime)
    {
        //
    }
}
