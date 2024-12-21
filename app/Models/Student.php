<?php

namespace App\Models;

use App\Enums\StudentGender;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Student extends Model
{   
    protected $fillable = [
        'user_id',
        'grade_id',
        'teacher_id',
        'nisn',
        'slug',
        'gender',
        'place_birth',
        'date_birth',
        'religion',
        'previous_education',
        'address',
        'father_name',
        'mother_name',
        'father_occupation',
        'mother_occupation',
        'parent_address'
    ];
    protected function casts():array
    {
        return [
            'gender'=>StudentGender::class,
        ] ;
    }
    public function user():BelongsTo
    {
        return $this->belongsTo(User::class);
    }
    public function teacher():BelongsTo
    {
        return $this->belongsTo(Teacher::class);
    }
    public function grade():BelongsTo
    {
        return $this->belongsTo(Grade::class);
    }
}
