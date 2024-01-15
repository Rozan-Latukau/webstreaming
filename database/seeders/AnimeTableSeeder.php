<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Anime;

class AnimeTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $anime = [
            [
                'name' => 'Boruto Uzumaki',
                'slug' => 'boruto-uzumaki',
                'genre' => 'Adventure. Fantasy, comedi',
                'video_url' => 'https://www.youtube.com/watch?v=nOgo2xhPZm8',
                'thumbnail' => 'https://i.pinimg.com/736x/22/3f/77/223f775de1ee3781c67ee0a4d6d26a13.jpg',
                'rating' => 8.0,
                'is_featured' => 1,
            ],
            [
                'name' => 'Solo Leveling',
                'slug' => 'solo-leveling',
                'genre' => 'Action, fantasy',
                'video_url' => 'https://www.youtube.com/watch?v=nOgo2xhPZm8',
                'thumbnail' => 'https://i.pinimg.com/originals/d4/8a/70/d48a708798e36fcbab438b5b11de0ec1.jpg',
                'rating' => 9.0,
                'is_featured' => 0,
            ],
            [
                'name' => 'Tokyo Ghoul ',
                'slug' => 'tokyo-ghoul',
                'genre' => 'dark, fantasy',
                'video_url' => 'https://www.youtube.com/watch?v=nOgo2xhPZm8',
                'thumbnail' => 'https://i.pinimg.com/564x/0d/ca/eb/0dcaeb325ca673fce063b78bb3a54f1b.jpg',
                'rating' => 7.5,
                'is_featured' => 0,
            ]
        ];
        Anime::insert($anime);
    }
}
