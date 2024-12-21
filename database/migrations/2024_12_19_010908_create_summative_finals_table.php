<?php

use App\Enums\StudentAchievement;
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
        Schema::create('summative_finals', function (Blueprint $table) {
            $table->id();
            $table->foreignId('student_id')->constrained('students')->cascadeOnDelete();
            $table->foreignId('subject_id')->constrained('subjects')->cascadeOnDelete();
            $table->integer('nilai_scope');
            $table->integer('non_tes');
            $table->integer('tes');
            $table->integer('rapor');
            $table->string('description_rapor')->nullable();
            $table->string('status')->default(StudentAchievement::SEMESTER_SATU->value);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('summative_finals');
    }
};
