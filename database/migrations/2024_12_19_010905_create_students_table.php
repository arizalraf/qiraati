<?php

use App\Enums\StudentAchievement;
use App\Enums\StudentGender;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('students', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users')->cascadeOnDelete();
            $table->foreignId('grade_id')->constrained('grades')->cascadeOnDelete();
            $table->foreignId('teacher_id')->constrained('teachers')->cascadeOnDelete();
            $table->string('nisn')->unique();
            $table->string('slug')->unique();
            $table->string('gender')->default(StudentGender::LAKI->value);
            $table->string('place_birth');
            $table->date('date_birth');
            $table->string('religion');
            $table->string('previous_education');
            $table->string('address');
            $table->string('father_name');
            $table->string('mother_name');
            $table->string('father_occupation');
            $table->string('mother_occupation');
            $table->string('parent_address');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('students');
    }
};
