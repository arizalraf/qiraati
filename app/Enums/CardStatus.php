<?php

namespace App\Enums;

enum CardStatus:string
{
    case NAIK_KELAS = "Naik Kelas";
    case TINGGAL_KELAS = "Tinggal Kelas";
    case SEMESTER_SATU = "Semester Satu";
   

    public static function options():array
    {
        return collect(self::cases())->map(fn($item) =>[
            'value'=>$item->value,
            'label'=>$item->name
        ])->values()->toArray();
    }
}