<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Grade extends Model
{
    protected $fillabel=[
        "name",
        "semester"
    ];
    public function students():HasMany
    {
        return $this->hasMany(Student::class);
    }
    public function objectives():HasMany
    {
        return $this->hasMany(Objective::class);
    }
}
