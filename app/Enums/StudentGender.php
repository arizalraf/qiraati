<?php

namespace App\Enums;

enum StudentGender:string
{
    case LAKI = "Laki-Laki";
    case PEREMPUAN = "Perempuan";

    public static function options():array
    {
        return collect(self::cases())->map(fn($item) =>[
            'value'=>$item->value,
            'label'=>$item->name,
        ])->values()->toArray();
    }
}