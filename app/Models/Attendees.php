<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Attendees extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'household_no',
        'purok',
        'first',
        'second',
        'third',
        'fourth',
    ];
}
