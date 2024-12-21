<?php

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
        Schema::create('teachers', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users')->cascadeOnDelete();
            $table->string('nip')->unique();
            $table->string('slug')->unique();
            $table->string('gender')->default(StudentGender::PEREMPUAN->value);
            $table->string('place_birth');
            $table->date('date_birth');
            $table->string('religion');
            $table->string('address');
            $table->string('education');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('teachers');
    }
};
