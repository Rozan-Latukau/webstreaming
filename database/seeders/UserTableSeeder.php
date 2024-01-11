<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $admin = User::create([
            'name' => 'Rozan',
            'email' => 'rozan15@gmail.com',
            'password' => bcrypt('password'),
        ]);
        $admin->assignRole('admin');
    }
}
