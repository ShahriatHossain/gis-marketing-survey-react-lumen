<?php

namespace Database\Seeders;

use App\Models\QuestionType;
use Illuminate\Database\Seeder;

class QuestionTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        QuestionType::insert([
            ['name' => 'Text', 'description' => 'Free Text'],
            ['name' => 'Checkbox', 'description' => 'Multiple Choice Checkbox'],
            ['name' => 'Radio', 'description' => 'Multiple Choice Radio']
        ]);
    }
}
