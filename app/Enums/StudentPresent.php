<?php

namespace App\Enums;

enum StudentPresent:string
{
    case IZIN = "Izin";
    case SAKIT = "SAKIT";
    case ABSEN = "ABSEN";

    public static function options():array
    {
        return collect(self::cases())->map(fn($item) =>[
            'value'=>$item->value,
            'label'=>$item->name
        ])->values()->toArray();
    }
}