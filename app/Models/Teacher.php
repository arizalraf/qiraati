<?php

namespace App\Models;

use App\Enums\StudentGender;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Teacher extends Model
{
    protected $fillable = [
        'nip',
        'user_id',
        'slug',
        'gender',
        'place_birth',
        'date_birth',
        'religion',
        'address',
        'education',
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
    public function students():HasMany
    {
        return $this->hasMany(Student::class);
    }
}
