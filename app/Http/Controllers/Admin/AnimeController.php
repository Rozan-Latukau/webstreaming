<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Anime;
use Illuminate\Http\Request;
use App\Http\Requests\Admin\Anime\Store;
use App\Http\Requests\Admin\Anime\Update;
use Storage;
use Str;

class AnimeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $anime = Anime::withTrashed()->orderBy('deleted_at')->get();
        return Inertia('Admin/Anime/Index', [
            'animes' => $anime,
        ]);
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
            'message' => "Successfully Create Anime",
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
        return Inertia('Admin/Anime/Edit', [
            'anime' => $anime
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Update $request, Anime $anime)
    {
        $data = $request->validated();
        if ($request->file('thumbnail')) {
            $data['thumbnail'] = Storage::disk('public')->put('animes', $request->file('thumbnail'));
            Storage::disk('public')->delete($anime->thumbnail);
        } else {
            $data['thumbnail'] = $anime->thumbnail;
        }
        $anime->update($data);
        return redirect(route('admin.dashboard.anime.index')) -> with([
            'message' => "Successfully Update Anime",
            'type' => 'success'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Anime $anime)
    {
        $anime->delete();
        return redirect(route('admin.dashboard.anime.index')) -> with([
            'message' => "Successfully Deleted Anime",
            'type' => 'success'
    ]);
    }

    public function restore($anime)
    {
        Anime::withTrashed()->find($anime)->restore();
        return redirect(route('admin.dashboard.anime.index')) -> with([
            'message' => "Successfully Restore Anime",
            'type' => 'success'
    ]);
    }
}
