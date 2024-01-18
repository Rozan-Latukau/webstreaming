<?php

namespace App\Http\Requests\Admin\Anime;

use Illuminate\Foundation\Http\FormRequest;
use Auth;

class Update extends FormRequest
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
            'name' => 'nullable|unique:animes,name,'.$this->anime->id,
            'genre' => 'nullable',
            'video_url' => 'nullable|url',
            'rating' => 'nullable|numeric|min:0|max:10',
            'is_featured' => 'nullable|boolean',
        ];
    }
}
