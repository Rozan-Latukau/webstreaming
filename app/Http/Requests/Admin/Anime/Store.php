<?php

namespace App\Http\Requests\Admin\Anime;

use Illuminate\Foundation\Http\FormRequest;
use Auth;

class Store extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return Auth::user()->hasRole('admin');
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required|unique:animes,name',
            'genre' => 'required',
            'video_url' => 'required|url',
            'rating' => 'required|numeric|min:0|max:10',
            'is_featured' => 'nullable|boolean',
        ];
    }
}
