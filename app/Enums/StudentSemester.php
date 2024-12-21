<?php

namespace App\Enums;

enum StudentSemester:string
{
    case SEMESTER_SATU = "Semester Satu";
    case SEMESTER_DUA = "Semester Dua";

    public static function options():array
    {
        return collect(self::cases())->map(fn($item) =>[
            'value'=>$item->value,
            'label'=>$item->name
        ])->values()->toArray();
    }
}